export class EmptyText
{
    static checkText()
    {
        return (dataText: any): string =>
        {
            
            if (!dataText || dataText.length <= 0 || /^\s+$/.test(dataText))
                return " - ";
            else return dataText;
        }
    }
}
angular.module('EmptyTextFilter', []).filter('EmptyText', EmptyText.checkText);