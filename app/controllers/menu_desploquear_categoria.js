var data_HS =[Ti.UI.createPickerRow({title:'Colorea'}),Ti.UI.createPickerRow({title:'Selecciona'}),
			  Ti.UI.createPickerRow({title:'Acciones'}),Ti.UI.createPickerRow({title:'Gestos'})];
var data_TF =[Ti.UI.createPickerRow({title:'Siluetas'}),Ti.UI.createPickerRow({title:'Encúentralos'}),
			  Ti.UI.createPickerRow({title:'Objetos'}),Ti.UI.createPickerRow({title:'Diferencias'}),
			  Ti.UI.createPickerRow({title:'Memorice'})];
$.Picker_CG.add.addEventListener('change',function(e){
	$.Picker_JG.visible="true";
	if($.Picker_JG.columns[0]) {
    	var _col = $.Picker_JG.columns[0];
        var len = _col.rowCount;
        for(var x = len-1; x >= 0; x-- ){
                var _row = _col.rows[x];
                _col.removeRow(_row);
        }
	}
 	if(e.row.title=="Habilidades Sociales"){
 		$.Picker_JG.add(data_HS);
 		/*
 		data[0]=Ti.UI.createPickerRow({title:'Colorea'});
		data[1]=Ti.UI.createPickerRow({title:'Selecciona'});
		data[2]=Ti.UI.createPickerRow({title:'Acciones'});
		data[3]=Ti.UI.createPickerRow({title:'Gestos'});*/
	}
	if(e.row.title=="Tolerancia a la Frustración"){
		$.Picker_JG.add(data_TF);
		/*
		data[0]=Ti.UI.createPickerRow({title:'Siluetas'});
		data[1]=Ti.UI.createPickerRow({title:'Encúentralos'});
		data[2]=Ti.UI.createPickerRow({title:'Objetos'});
		data[3]=Ti.UI.createPickerRow({title:'Diferencias'});
		data[4]=Ti.UI.createPickerRow({title:'Memorice'});*/
	}
	//$.Picker_JG.selectionIndicator = true;
});

$.menu_desploquear_categoria.open();