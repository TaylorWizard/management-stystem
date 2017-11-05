/**
 * action 类型
 */
export const ADD_TODO = 'ADD_TODO'
export const COMPLETE_TODO = 'COMPLETE_TODO'

/*
  action创建函数
 */
export function addTodo(text) {
  return {type: ADD_TODO, text}
}

export function completeTodo(text) {
  return {type: COMPLETE_TODO, text}
}

