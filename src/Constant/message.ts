export const MSG = {
    DBCONNECTED: 'Database is connected successfully',
    LOGIN: 'Login successfully done',
    SERVERLISTEN: 'Server is listening on port',
    USERCREATED: 'User is created successfully',
    SUCCESS: (task : string) => { return `${task} successfully` }
}

export const errMSG = {
    CONNECTDB: 'Database is not connected',
    REQUIRED: (field : string) => { return `${field} is required for proceeding to next` },
    INTERNALSERVERERRORRESULT: 'Internal server error response',
    DEFAULTERRORMSG: 'some things went wrong',
    EXSISTUSER: 'Email id is already exist',
    CREATEUSER: 'user is not created',
    NOTEXISTUSER: 'User is not exist',
    PASSWORDNOTMATCH: 'Password is not match',
    EXPIREDTOKEN: 'Access token is not verified it may be expired',
    NOTVALIDROLE: (Role : string) => { return `${Role} don't have permission to access this functionality.` },
    USERNOTFOUND: 'There is no user',
    NOTFOUND: (field : string) => { return `${field} is not found in our data` },
    CREATEERR: (field : string) => { return `${field} is not created` },
    UPDATEUSER: 'User is not updated',
    NOTFOUNDDELETED: 'There is no deleted user',
    RETREIVEUSER: 'User is not retrieved',
    INVALIDID: 'Invalid object ID',
    CREATEQUESTION: 'Question is not created',
    NOTEXISTQUESTION: 'Question is not exist',
    NOTALIGABLEUSER: 'User is not aligable for paper'
}
