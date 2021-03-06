import React from 'react'
import { useTranslation } from '../utils/hooks'

const Footer = () => {

    const t = useTranslation()

  return (
    <div className='bg-white text-white'>
        <div className='py-10 px-10 max-w-6xl mx-auto'>
            <div className="flex gap-10 font-bold">
                <p>{t("page_home_contact")}</p>
                <p>{t("page_home_about")}</p>
            </div>
        </div>
    </div>
  )
}

export default Footer