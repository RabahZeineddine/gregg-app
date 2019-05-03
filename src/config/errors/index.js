const errors = {
    default: 'Um erro ocorreu, tente novamente.'
}

export const _errorDetail = (status) => {
    return errors[status] || errors['default']
}