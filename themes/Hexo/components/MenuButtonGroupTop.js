import React from 'react'
import Link from 'next/link'
import { useGlobal } from '@/lib/global'
import CONFIG_HEXO from '../config_hexo'

const MenuButtonGroupTop = (props) => {
  const { customNav } = props
  const { locale } = useGlobal()

  let links = [
    { icon: 'fas fa-archive', name: locale.COMMON.ARTICLE, to: '/archive', show: CONFIG_HEXO.MENU_ARCHIVE },
    { icon: 'fas fa-folder', name: locale.COMMON.CATEGORY, to: '/category', show: CONFIG_HEXO.MENU_CATEGORY },
    { icon: 'fas fa-tag', name: locale.COMMON.TAGS, to: '/tag', show: CONFIG_HEXO.MENU_TAG }
  ]

  if (customNav) {
    links = links.concat(customNav)
  }

  return <nav id='nav' className='leading-8 flex justify-center font-sans w-full'>
      {links.map(link => {
        if (link.show) {
          return <Link key={`${link.to}`} title={link.to} href={link.to} >
          <a className={'py-1.5 my-1 px-2 duration-300 text-base justify-center items-center cursor-pointer'} >
              <div className='w-full flex dark:text-white text-sm items-center justify-center hover:scale-105 duration-200 transform'>
                <i className={`${link.icon} mr-1`}/>
                <div className='text-center'>{link.name}</div>
              </div>
            </a>
          </Link>
        } else {
          return null
        }
      })}
    </nav>
}
export default MenuButtonGroupTop
