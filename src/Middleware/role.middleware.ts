import { Request, Response, NextFunction } from "express";
import { BaseMiddleware } from "inversify-express-utils";
import { ApiError } from "../Utils/ApiError";
import { StatusCode } from "../Constant/statuscode";
import { errMSG } from "../Constant/message";

export class Role extends BaseMiddleware{
    // handler(req: Request, res: Response, next: NextFunction): void {
    //     next();
    // }

    // checkRole(role: string) {
    //     return (req: Request, res: Response, next: NextFunction) => {
    //       try {
    //         const userRole = req.headers.ROLE as string; // Assuming role is stored in request headers
    
    //         if (!userRole || userRole.toLowerCase() !== role.toLowerCase()) {
    //           res.status(403).json({
    //             message: `You don't have permission to access this resource. Required role: ${role}`
    //           });
    //           return;
    //         }
    
    //         // Role is correct, continue to the next middleware or route handler
    //         next();
    //       } catch (error) {
    //         res.status(500).json({
    //           message: 'Internal server error'
    //         });
    //       }
    //     };

    
    handler(req: Request, res: Response, next: NextFunction): void {
        try {
            
            const permissions = {
                admin : [],
                stockManger : [],
                storeRetailer : [],
            }

            const role = req.headers.ROLE?.toString() ;

            if (!role) throw new ApiError(StatusCode.CONFLICT , errMSG.REQUIRED('User Role'))

            const currentRoute = req.protocol + "://" + req.get("host") + req.originalUrl;

            const parsedUrl = new URL(currentRoute);

            const pathname = parsedUrl.pathname;

            const userPermissions = permissions[role as keyof typeof permissions]

            const isPermitted = userPermissions.some(perm => pathname.startsWith(perm))

            if(!isPermitted) throw new ApiError(StatusCode.FORBIDDEN , errMSG.NOTVALIDROLE(role))
            
            next()

        } catch (error ) {
            res.status(error.statuscode || StatusCode.INTERNALSERVERERROR).json({
                message : error.message || errMSG.DEFAULTERRORMSG
            })
        }
    }

}