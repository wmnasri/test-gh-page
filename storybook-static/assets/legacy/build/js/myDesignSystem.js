var selectorTitleApplicant = document.getElementById('titleApplicant');

var selectorAlert = document.getElementById('alert');
var selectorButton = document.getElementById('button');
var selectorDropdown = document.getElementById('dropdown');
var selectorInput = document.getElementById('input');

var SDS = window.SDS();
var componentsList = SDS.ComponentsList;
SDS.render(componentsList.SzTitle, selectorTitleApplicant, {}, 'Informations concernant le demandeur');
SDS.render(componentsList.SzAlert, selectorAlert, {type: 'primary'}, 'Mon contenu');
SDS.render(componentsList.SzButton, selectorButton, {label: 'Mon bouton'});

var options = {
    options: [
        {
            content: 'JE SUIS UN PROFESSIONNEL',
            icon: 'mdi mdi-file-xml'
        },
        {
            content: 'JE SUIS UN PARTICULIER',
            link: 'www.google.com'
        },
        {
            content: 'JE SUIS UN CLIQUABLE',
            handleClick: function () {
                alert('do something');
            }
        }
    ]
};
SDS.render(componentsList.SzDropDown, selectorDropdown, options);

var inputProps = {
    value: '',
    label: 'Un label',
    name: 'add_contract[fullReference]',
    placeholder: 'Un placeholder',
    required: true
};
// function onChange(e) {
//   var { value } = e.target;
//   let input = document.getElementsByName('toto')[0];
//   this.value = value;
//   SDS(SzInput, selectorInput, this);
// }
// inputProps.onChange = onChange.bind(inputProps);

inputProps.onChange = function(e) {
    inputProps.value = e.target.value;
    SDS.render(componentsList.SzInput, selectorInput, inputProps);
};

SDS.render(componentsList.SzInput, selectorInput, inputProps);