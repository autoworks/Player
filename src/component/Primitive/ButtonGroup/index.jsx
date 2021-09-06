import ButtonGroupWrapper from './component/ButtonGroupWrapper'
import ButtonGroupItem from './component/ButtonGroupItem'

const ButtonGroup = ButtonGroupWrapper
ButtonGroup.displayName = 'ButtonGroup'

ButtonGroup.Item = ButtonGroupItem
ButtonGroup.Item.displayName = 'ButtonGroup.Item'

export default ButtonGroup
