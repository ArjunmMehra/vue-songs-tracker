export const install = function (Vue, options) {
    Vue.myMethod = function (){
        console.log("Hello my Method");
    }

    Vue.directive('myDirective',
        {
            bind(el, binding){
                console.log(`Element binded`,el)
            }
        }
    )
}