export const setUser = (value)=>{
        return {type: 'SET_USER', payload: value}
    }

export const resetUser = ()=>{
    return {type: 'RESET_USER'}
}