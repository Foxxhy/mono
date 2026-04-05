import { ICONS } from './Icon.list'
import { type IIcon } from './Icon.type'
import './Icon.css'

export const Icon = ({ name, size = 'base', color = 'color-black' }: IIcon) => {
    return <svg aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`icon-${size} icon-${color}`} viewBox="0 0 24 24" dangerouslySetInnerHTML={{ __html: ICONS[name] }}></svg>
}
