
export default class ErrorHandler {
  static handle (context, response) {
    context.$toaster.error(response.response.data.error)
  }
}
