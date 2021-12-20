jQuery("#simulation")
  .on("click", ".m-b78c28c1-e64e-4804-bde5-791620cfdd71 .click,.m-b78c28c1-e64e-4804-bde5-791620cfdd71.click", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#m-b78c28c1-Rectangle_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/5613abf7-5e17-45e8-a9f1-da065e567a0d"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#m-b78c28c1-Paragraph")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/d12245cc-1680-458d-89dd-4f0d7fb22724"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("mouseup", ".m-b78c28c1-e64e-4804-bde5-791620cfdd71 .mouseup,.m-b78c28c1-e64e-4804-bde5-791620cfdd71.mouseup", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#m-b78c28c1-Rectangle_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#m-b78c28c1-e64e-4804-bde5-791620cfdd71 #m-b78c28c1-Rectangle_2 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFFFFF"
                    }
                  },{
                    "target": [ ".m-b78c28c1-e64e-4804-bde5-791620cfdd71 #m-b78c28c1-Rectangle_2 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFFFFF"
                    }
                  },{
                    "target": [ "#m-b78c28c1-e64e-4804-bde5-791620cfdd71 #m-b78c28c1-Rectangle_2 span" ],
                    "attributes": {
                      "color": "#282828"
                    }
                  },{
                    "target": [ ".m-b78c28c1-e64e-4804-bde5-791620cfdd71 #m-b78c28c1-Rectangle_2 span" ],
                    "attributes": {
                      "color": "#282828"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("mousedown", ".m-b78c28c1-e64e-4804-bde5-791620cfdd71 .mousedown,.m-b78c28c1-e64e-4804-bde5-791620cfdd71.mousedown", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#m-b78c28c1-Rectangle_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#m-b78c28c1-e64e-4804-bde5-791620cfdd71 #m-b78c28c1-Rectangle_2 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#999999"
                    }
                  },{
                    "target": [ ".m-b78c28c1-e64e-4804-bde5-791620cfdd71 #m-b78c28c1-Rectangle_2 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#999999"
                    }
                  },{
                    "target": [ "#m-b78c28c1-e64e-4804-bde5-791620cfdd71 #m-b78c28c1-Rectangle_2 span" ],
                    "attributes": {
                      "color": "#FFFFFF"
                    }
                  },{
                    "target": [ ".m-b78c28c1-e64e-4804-bde5-791620cfdd71 #m-b78c28c1-Rectangle_2 span" ],
                    "attributes": {
                      "color": "#FFFFFF"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("mouseenter dragenter", ".m-b78c28c1-e64e-4804-bde5-791620cfdd71 .mouseenter,.m-b78c28c1-e64e-4804-bde5-791620cfdd71.mouseenter", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#m-b78c28c1-Rectangle_2") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#m-b78c28c1-e64e-4804-bde5-791620cfdd71 #m-b78c28c1-Rectangle_2 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#282828"
                    }
                  },{
                    "target": [ ".m-b78c28c1-e64e-4804-bde5-791620cfdd71 #m-b78c28c1-Rectangle_2 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#282828"
                    }
                  },{
                    "target": [ "#m-b78c28c1-e64e-4804-bde5-791620cfdd71 #m-b78c28c1-Rectangle_2 span" ],
                    "attributes": {
                      "color": "#FFFFFF"
                    }
                  },{
                    "target": [ ".m-b78c28c1-e64e-4804-bde5-791620cfdd71 #m-b78c28c1-Rectangle_2 span" ],
                    "attributes": {
                      "color": "#FFFFFF"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    }
  })
  .on("mouseleave dragleave", ".m-b78c28c1-e64e-4804-bde5-791620cfdd71 .mouseleave,.m-b78c28c1-e64e-4804-bde5-791620cfdd71.mouseleave", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#m-b78c28c1-Rectangle_2")) {
      jEvent.undoCases(jFirer);
    }
  });