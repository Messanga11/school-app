import { IntlProvider } from "react-intl"
import { Fragment } from "react"

import messages from "./messages"
import { connect } from "react-redux"

interface ProviderProps {
    children: any,
    locale?: string
}

const Provider = ({ children, locale }: ProviderProps) => {
    return (
        <IntlProvider locale={locale} textComponent={Fragment} messages={messages[locale]}>
            {children}
        </IntlProvider>
    )
}

const mapStateToProps = (state) => ({
    locale: state.auth.locale
})

export default connect(mapStateToProps)(Provider)
