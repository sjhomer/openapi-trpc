import { OpenAPIV3 } from 'openapi-types'

function defineKeys<T extends keyof OpenAPIV3.OperationObject>(keys: T[]): T[] {
  return keys
}

export const allowedOperationKeys = defineKeys([
  'deprecated',
  'description',
  'externalDocs',
  'operationId',
  'parameters',
  'summary',
  'tags',
  'requestBody',
  'callbacks',
  'security',
  'servers'
])

export const optionalOperationKeys = defineKeys([
  'responses',
])

/**
 * @public
 */
export type OperationMeta =
   Pick<
    OpenAPIV3.OperationObject,
    typeof allowedOperationKeys[number]
  > & Partial<OpenAPIV3.OperationObject>
