(function () {
    var Pie = Backbone.Model.extend({
        defaults: {
            ISTJ:0,
            INFJ:0,
            INTJ:0,
            ISTP:0,
            ISFP:0,
            INFP:0,
            INTP:0,
            ISFJ:0,
            ESTP:0,
            ESFP:0,
            ENFP:0,
            ENTP:0,
            ESTJ:0,
            ESFJ:0,
            ENFJ:0,
            ENTJ:0,
            personalityArray: [],
            ctx: null
        },
        getFreq : function() {
            for (var i = 0; i < this.get('personalityArray').length; i++) {
              switch(this.get('personalityArray')[i]) {
                case "ENFJ":
                    this.set("ENFJ", this.get("ENFJ")+1);
                    break;
                case "ENTJ":
                    this.set("ENTJ", this.get("ENTJ")+1);
                    break;
                case "ENTP":
                    this.set("ENTP", this.get("ENTP")+1);
                  break;    
                case "ENFP":
                    this.set("ENFP", this.get("ENFP")+1);
                  break;
                case "ESFJ":
                    this.set("ESFJ", this.get("ESFJ")+1);
                    break;
                case "ESTJ":
                    this.set("ESTJ", this.get("ESTJ")+1);
                    break;
                case "ESTP":
                    this.set("ESTP", this.get("ESTP")+1);
                  break;    
                case "ESFP":
                    this.set("ESFP", this.get("ESFP")+1);
                  break;
                case "INFJ":
                    this.set("INFJ", this.get("INFJ")+1);
                    break;
                case "INTJ":
                    this.set("INTJ", this.get("INTJ")+1);
                    break;
                case "INTP":
                    this.set("INTP", this.get("INTP")+1);
                    break;    
                case "INFP":
                    this.set("INFP", this.get("INFP")+1);
                    break;
                case "ISFJ":
                    this.set("ISFJ", this.get("ISFJ")+1);
                    break;
                case "ISTJ":
                    this.set("ISTJ", this.get("ISTJ")+1);
                    break;
                case "ISTP":
                    this.set("ISTP", this.get("ISTP")+1);
                    break;    
                case "ISFP":
                    this.set("ISFP", this.get("ISFP")+1);
                    break;
                default:
                    break;
              }
            }
        },
        setData: function(){
            this.set('dataSet', [
            {
                value: this.get('ENFJ'),
                color:"#F7464A",
                highlight: "#FF5A5E",
                label: "ENFJ"
            },
            {
                value: this.get('ENTJ'),
                color: "#46BFBD",
                highlight: "#5AD3D1",
                label: "ENTJ"
            },
            {
                value: this.get('ENTP'),
                color: "#FDB45C",
                highlight: "#FFC870",
                label: "ENTP"
            },
                        {
                value: this.get('ENFP'),
                color:"#7FFF00",
                highlight: "#FF5A5E",
                label: "ENFP"
            },
            {
                value: this.get('ESFJ'),
                color: "#6495ED",
                highlight: "#5AD3D1",
                label: "ESFJ"
            },            {
                value: this.get('ESTJ'),
                color:"#00FFFF",
                highlight: "#FF5A5E",
                label: "ESTJ"
            },
            {
                value: this.get('ESTP'),
                color: "#006400",
                highlight: "#5AD3D1",
                label: "ESTP"
            },            {
                value: this.get('ESFP'),
                color:"#E9967A",
                highlight: "#FF5A5E",
                label: "ESFP"
            },
          {
                value: this.get('INFJ'),
                color:"#008B8B",
                highlight: "#FF5A5E",
                label: "INFJ"
            },
            {
                value: this.get('INTJ'),
                color: "#2F4F4F",
                highlight: "#5AD3D1",
                label: "INTJ"
            },
            {
                value: this.get('INTP'),
                color: "#FF00FF",
                highlight: "#FFC870",
                label: "INTP"
            },
                        {
                value: this.get('INFP'),
                color:"#4B0082",
                highlight: "#FF5A5E",
                label: "INFP"
            },
            {
                value: this.get('ISFJ'),
                color: "#90EE90",
                highlight: "#5AD3D1",
                label: "ISFJ"
            },            {
                value: this.get('ISTJ'),
                color:"#32CD32",
                highlight: "#FF5A5E",
                label: "ISTJ"
            },
            {
                value: this.get('ISTP'),
                color: "#BA55D3",
                highlight: "#5AD3D1",
                label: "ISTP"
            },            {
                value: this.get('ISFP'),
                color:"#7B68EE",
                highlight: "#FF5A5E",
                label: "ISFP"
            }
            ]);
        }
    });
    var ChartView = Backbone.View.extend({
        initialize: function () {
            this.$el = $(".data");
        },
        render: function(ctx) {
            var myPieChart = new Chart(this.model.get('ctx')).Pie(this.model.get('dataSet'));
            return this;
        }
    });

    $(function () {
        //Create a model and chart for personality types for yourself
        if (window.localStorage.getItem("personalities1") !== null) {
            personalityArray1 = window.localStorage.getItem("personalities1").split(",");
            var ctx = $("#history1").get(0).getContext("2d");
            var chart1 = new Pie({personalityArray: personalityArray1, ctx: ctx});
            chart1.getFreq();
            chart1.setData();
            var chart1View = new ChartView({model: chart1});
            chart1View.render();
        }
        //Create a model and chart for personality types for others
        if (window.localStorage.getItem("personalities2") !== null) {
            personalityArray2 = window.localStorage.getItem("personalities2").split(",");
            var ctx = $("#history2").get(0).getContext("2d");
            var chart2 = new Pie({personalityArray: personalityArray2, ctx: ctx});
            chart2.getFreq();
            chart2.setData();
            var chart2View = new ChartView({model: chart2});
            chart2View.render();
        }
    });
}());