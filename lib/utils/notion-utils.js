/**
 * 修复 uuidToId 函数，添加空值检查
 * 原始函数在 notion-utils 包中，但在处理未定义值时会抛出错误
 * @param {string} uuid
 * @returns {string}
 */
export function safeUuidToId(uuid) {
  if (!uuid || typeof uuid !== 'string') {
    console.warn('uuidToId received invalid input:', uuid)
    return uuid || ''
  }

  try {
    // 模拟 notion-utils 中的 uuidToId 函数
    return uuid.replaceAll('-', '')
  } catch (error) {
    console.error('Error in uuidToId:', error, 'uuid:', uuid)
    return uuid
  }
}

/**
 * 检查并修复 notion 块数据
 * @param {object} blockMap
 * @returns {object}
 */
export function sanitizeNotionBlocks(blockMap) {
  if (!blockMap || typeof blockMap !== 'object') {
    return blockMap
  }

  // 深拷贝块数据以避免修改原始数据
  const sanitizedBlockMap = JSON.parse(JSON.stringify(blockMap))

  // 遍历所有块并修复可能的 undefined 值
  for (const [blockId, blockData] of Object.entries(sanitizedBlockMap.block || {})) {
    if (blockData && blockData.value) {
      // 确保所有必需的属性都有有效值
      if (!blockData.value.id) {
        blockData.value.id = blockId
      }

      // 确保 id 是字符串
      if (typeof blockData.value.id !== 'string') {
        blockData.value.id = String(blockData.value.id)
      }
    }
  }

  return sanitizedBlockMap
}