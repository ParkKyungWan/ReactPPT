

export function createColor (){

    const colors = [
        "#FF5733", "#FFC300", "#FFFF66", "#66FF66", "#33CC33",
        "#3366FF", "#3399FF", "#CC66FF", "#FF66FF", "#FF85A2",
        "#FF826B", "#FF9999", "#FFFF99", "#D8BFD8", "#5CD1E5",
        "#5CD1E5", "#5CD1E5", "#5CD1E5", "#5CD1E5", "#5CD1E5",
        "#DAA520", "#FF7F50", "#CD853F", "#87CEEB", "#87CEFA",
        "#FFB6C1", "#C1FFC1", "#FF6347", "#87CEEB", "#8FBC8F"
      ];

    

    const newColor = colors[Math.floor(Math.random()*colors.length)]
    return newColor;
}