


function numberFormatted(number, currency) {
    const currencyFormatted = Intl.NumberFormat("en-US", {
        style: "currency",
        currency: currency,
        maximumFractionDigits: 2
    })

    return currencyFormatted.format(number)
}

export default numberFormatted