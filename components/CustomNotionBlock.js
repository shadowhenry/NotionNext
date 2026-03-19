import React from 'react'

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

// 简单的块渲染组件，避免导入问题
export function CustomNotionBlock(props) {
  try {
    // 确保 block 和 id 存在
    if (!props.block || !props.block.value || !props.block.value.id) {
      console.warn('Invalid block data:', props.block)
      return null
    }

    const block = props.block.value

    // 根据块类型渲染不同的内容
    switch (block.type) {
      case 'paragraph':
        return (
          <p className="notion-paragraph">
            {block.properties?.text?.[0]?.[0] || ''}
          </p>
        )

      case 'heading_1':
        return (
          <h1 className="notion-h1">
            {block.properties?.title?.[0]?.[0] || ''}
          </h1>
        )

      case 'heading_2':
        return (
          <h2 className="notion-h2">
            {block.properties?.title?.[0]?.[0] || ''}
          </h2>
        )

      case 'heading_3':
        return (
          <h3 className="notion-h3">
            {block.properties?.title?.[0]?.[0] || ''}
          </h3>
        )

      case 'bulleted_list_item':
        return (
          <li className="notion-list-item">
            {block.properties?.text?.[0]?.[0] || ''}
          </li>
        )

      case 'numbered_list_item':
        return (
          <li className="notion-list-item notion-numbered">
            {block.properties?.text?.[0]?.[0] || ''}
          </li>
        )

      default:
        // 对于不支持的块类型，返回一个简单的占位符
        return (
          <div className="notion-block">
            {block.properties?.title?.[0]?.[0] ||
              block.properties?.text?.[0]?.[0] ||
              `Block: ${block.type}`}
          </div>
        )
    }
  } catch (error) {
    console.error('Error rendering CustomNotionBlock:', error)
    return null
  }
}