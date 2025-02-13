import React from 'react'

import docsIcon from '../images/svgs/docs-icon.svg'
import htgIcon from '../images/svgs/htg.svg'
import tutsIcon from '../images/svgs/tuts.svg'
import feTemplate from '../images/svgs/fe-template.svg'
import nodeTemplate from '../images/svgs/node-template.svg'
import elementOrg from '../images/svgs/element-original.svg'
import gradHat from '../images/svgs/grad-hat.svg'
import calendar from '../images/svgs/calendar.svg'
import grantsDollar from '../images/svgs/grants-dollar.svg'
import ideCode from '../images/svgs/ide-code.svg'
import diamondYellow from '../images/svgs/diamond-yellow.svg'
import diamondPurple from '../images/svgs/diamond-purple.svg'
import diamondGreen from '../images/svgs/diamond-green.svg'
import arrowMore from '../images/svgs/arrow-more.svg'
import flag from '../images/svgs/flag.svg'
import github from '../images/svgs/github-small.svg'
import docsNavIcon from '../images/svgs/docs-nav-icon.svg'
import arrowDown from '../images/svgs/arrow-down.svg'
import copyText from '../images/svgs/copy-text.svg'
import elementWhite from '../images/svgs/element-white.svg'
import stackExchange from '../images/svgs/stack-exchange-white.svg'
import twitter from '../images/svgs/twitter.svg'
import feedbackIcon from '../images/svgs/feedback-icon.svg'
import externalIcon from '../images/svgs/external-icon.svg'
import informationIcon from '../images/svgs/information.svg'
import adviceIcon from '../images/svgs/advice.svg'
import noteIcon from '../images/svgs/note.svg'
import searchIcon from '../images/svgs/search.svg'
import closeIcon from '../images/svgs/close-icon.svg'
import paperplane from '../images/svgs/paperplane.svg'
import checkMark from '../images/svgs/check-mark.svg'

const iconsMap = new Map()
/* homepage */
iconsMap.set('docsIcon', docsIcon)
iconsMap.set('htgIcon', htgIcon)
iconsMap.set('tutsIcon', tutsIcon)
iconsMap.set('gradHat', gradHat)
iconsMap.set('calendar', calendar)
iconsMap.set('grantsDollar', grantsDollar)
iconsMap.set('ideCode', ideCode)
iconsMap.set('diamondGreen', diamondGreen)
iconsMap.set('diamondYellow', diamondYellow)
iconsMap.set('diamondPurple', diamondPurple)
/* playground */
iconsMap.set('feTemplate', feTemplate)
iconsMap.set('nodeTemplate', nodeTemplate)
/* social-media */
iconsMap.set('elementOrg', elementOrg)
iconsMap.set('elementWhite', elementWhite)
iconsMap.set('stackExchange', stackExchange)
iconsMap.set('github', github)
iconsMap.set('twitter', twitter)
/* UI specific */
iconsMap.set('arrowMore', arrowMore)
iconsMap.set('arrowDown', arrowDown)
iconsMap.set('flag', flag)
iconsMap.set('docsNavIcon', docsNavIcon)
iconsMap.set('copyText', copyText)
iconsMap.set('feedbackIcon', feedbackIcon)
iconsMap.set('externalIcon', externalIcon)
iconsMap.set('informationIcon', informationIcon)
iconsMap.set('adviceIcon', adviceIcon)
iconsMap.set('noteIcon', noteIcon)
iconsMap.set('searchIcon', searchIcon)
iconsMap.set('closeIcon', closeIcon)
iconsMap.set('checkMark', checkMark)
iconsMap.set('paperplane', paperplane)

interface IconProps {
  name: string
  className?: string
}

export default function Icon({ name, className }: IconProps) {
  if (!name) return <span className="w-5"></span>
  const IconComponent = iconsMap.get(name)
  if (!IconComponent) return <span className="w-5"></span>
  return <IconComponent name={name} className={className}></IconComponent>
}
