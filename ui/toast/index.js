/**
 * Toast is a Growl message but specifically for Problem and Result formats
 * see https://tools.ietf.org/html/rfc7807 RFC 7807: Problem Details for HTTP APIs
 *
 */
import growl from '../growl'
import problemHandler from './problemHandler'
/**
 * Results look like
 * {
 *    ok: true,
 *    title: Some message
 *    status: 200/207/40x etc
 *    code: some.message.code
 *    detail: detail message if its a problem
 *    problems: array of problems if its has many children problems
 *    errors: array of validation field errors if its a validation problem
 * }
 */

function toast(result){
  //if its has a response then assume its an error response that needs the json pulled from it
  if(result.response){
    const errPromise = problemHandler.problemErrorFromResponse(result)
    errPromise.then((msg) => {
      growl.error(msg.message, msg.name)
    })
    // console.log("handleError",errMsg)
  } else if(result.ok === true) {
    growl.success(result.title)
  } else if(result.ok === false) {
    growl.error(result.detail, result.title)
  }
}
export default toast
