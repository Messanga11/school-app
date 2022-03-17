import React from 'react'
import { useTranslation } from '../utils/hooks'

const Footer = () => {

    const t = useTranslation()

  return (
    <div className='bg-black text-white'>
        <div className='py-10 px-10'>
            <div className="flex gap-10 font-bold">
                <p>{t("page_home_contact")}</p>
                <p>{t("page_home_about")}</p>
            </div>
        </div>
    </div>
  )
}

export default Footer