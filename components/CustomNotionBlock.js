import React from 'react'
import { Block } from 'react-notion-x'

// 自定义的 uuidToId 函数，添加空值检查
function safeUuidToId(uuid) {
  if (!uuid || typeof uuid !== 'string') {
    console.warn('uuidToId received invalid input:', uuid)
    return uuid || ''
  }

  try {
    return uuid.replaceAll('-', '')
  } catch (error) {
    console.error('Error in uuidToId:', error, 'uuid:', uuid)
    return uuid
  }
}

// 包装原始的 Block 组件，添加错误处理
export function CustomNotionBlock(props) {
  try {
    // 确保 block 和 id 存在
    if (!props.block || !props.block.value || !props.block.value.id) {
      console.warn('Invalid block data:', props.block)
      return null
    }

    // 返回原始的 Block 组件
    return <Block {...props} />
  } catch (error) {
    console.error('Error rendering CustomNotionBlock:', error)
    return null
  }
}