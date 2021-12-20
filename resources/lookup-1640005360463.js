(function(window, undefined) {
  var dictionary = {
    "b206237c-fed0-48e3-baa0-6ffb70e83cd4": "Register",
    "2639551e-acf0-499d-b944-b6f73ae45158": "Login",
    "3d09bca9-40b9-4411-9455-34868693ad8b": "Calculator Result",
    "5613abf7-5e17-45e8-a9f1-da065e567a0d": "Calculator",
    "7a684ff0-e3ec-4538-8804-bc720a5e0da5": "About Carbon Footprint",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Landing Page",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "3e21665e-046d-40e7-87d8-b2f86365f546": "Header Menu",
    "b78c28c1-e64e-4804-bde5-791620cfdd71": "Footer",
    "8334f283-e2bd-40ab-b36c-544c2c045dfb": "Login",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);