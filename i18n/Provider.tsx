import { IntlProvider } from "react-intl"
import { Fragment } from "react"

import messages from "./messages"
import { connect } from "react-redux"
import { NextPage } from "next"
import { ApplicationState } from "@/store/types"

interface ProviderProps {
    children: JSX.Element,
    locale: string
}

const Provider = ({ children, locale }: ProviderProps) => {
    return (
        <IntlProvider onError={() => undefined} locale={locale} textComponent={Fragment} messages={messages[locale]}>
            {children}
        </IntlProvider>
    )
}

const mapStateToProps = (state:ApplicationState) => ({
    locale: state.auth.locale
})

export default connect(mapStateToProps)(Provider)
