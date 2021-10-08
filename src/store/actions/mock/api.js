import OFFERS from "./offers.json"

const loading = async (stallTime = 2000) => await new Promise(res => setTimeout(res, stallTime))

export const getOffersAPI = async () => {
  try {
    await loading(500)
    const res = {
      data: OFFERS
    }
    return res
  } catch (err) {
    console.log(err)
  }
}
