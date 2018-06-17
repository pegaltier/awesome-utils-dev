/**

	The MIT License (MIT)

	Copyright (c) 2015 Francesco Benincasa ( abubusoft@gmail )

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in
	all copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	THE SOFTWARE.

**/

/*

	EDITED BY pegaltier (based on :
	http://www.tranberry.com/photoshop/photoshop_scripting/PS4GeeksOrlando/IntroScripts/openFolder.jsx
	https://github.com/xcesco/ic_launcher_exporter
	)
	
	
	PSD IC_LAUNCHER EXPORTER by Francesco Benincasa
	
	History 
	-------
    
    Version 1.3.0 - 2016/10/23
    --------------------------
    Removed generation for low density icons
    Add notifiy icon generation
    Is possibile to specify generated icon's name
	
    Version 1.2.0 - 2016/09/20
    --------------------------
    Add support to generic image size
    
	Version 1.1.1 - 2015/04/29
	---------------------------
	Path adjustment for android studio config.
		
	Version 1.1.0 - 2015/04/29
	---------------------------
	User interface improvements.
	
	Version 1.0.0 - 2015/04/23
	--------------------------
	First release. You can select root folder from which create or fill subdirectory with ic_launcher files generated from actual PSD file.
	

*/

/* 
    The original file must be a square.
    
    Image sizes to save depends of kind of icons you want to produce.
    
    ["192px","192px", "xxxhdpi"],
    ["144px","144px", "xxhdpi"],
    ["96px", "96px", "xhdpi"],
    ["72px", "72px", "hdpi"],
    ["48px", "48px", "mdpi"],
    ["36px", "36px", "ldpi"]
    
    The various states (each image) is in a layer comp.
    
    Process:
   
    Loop through the image sizes.
    -- Save history state.
    -- Resize to the current image size.
    -- Save image
    -- Restore the history state to return to the full-sized image.
        
*/

/////////////////////////
// SETUP
/////////////////////////


var APP = "ic_launcher psd exporter";
var VERSION = "1.3.0";
var AUTHOR = "Francesco Benincasa, ( abubusoft@gmail.com )";

var PROJECT_TYPE_ANDROID_STUDIO = "ANDROID_STUDIO";
var PROJECT_TYPE_ECLIPSE = "ECLIPSE";

// we suppose psd file is in /art .
// target folder will be  /app/src/main/res
var ANDROID_STUDIO_RELATIVE_PATH = '\\..\\result\\res\\';

// A list of file extensions to skip, keep them lower case
var gFilesToSkip = Array( "db", "xmp", "thm", "txt", "doc", "md0", "tb0", "adobebridgedb", "adobebridgedbt", "bc", "bct" );


/////////////////////////
// MAIN
/////////////////////////

var inputFolder = Folder.selectDialog("Select a folder of documents to process");
openFolder()



/////////////////////////
// FUNCTIONS
/////////////////////////

function isDocumentNew() {  
	try {
		var dummy = app.activeDocument.path.fsName;
		return false;
	}
	catch(err) {

		
	}
    
    return true;
}


// Given the a Folder of files, open them
function openFolder() {
        var filesOpened = 0;
        var fileList = inputFolder.getFiles();
        for ( var i = 0; i < fileList.length; i++ ) {
        		   // Make sure all the files in the folder are compatible with PS
                if ( fileList[i] instanceof File && ! fileList[i].hidden && ! IsFileOneOfThese( fileList[i], gFilesToSkip )) {
                        open( fileList[i] );
                        filesOpened++;
                
						/////////////////////////
						// Put all your processing functions...
						/////////////////////////
					
                		// Alert and show the document name
                		//alert(app.activeDocument.name);
                		process();
                		// Cloes the file without saving
                		app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
                	
					/////////////////////////
					// ...in the area between these two comments.
					/////////////////////////
					
				}
        }
        return filesOpened;
}


// given a file name and a list of extensions
// determine if this file is in the list of extensions
function IsFileOneOfThese( inFileName, inArrayOfFileExtensions ) {
	var lastDot = inFileName.toString().lastIndexOf( "." );
	if ( lastDot == -1 ) {
		return false;
	}
	var strLength = inFileName.toString().length;
	var extension = inFileName.toString().substr( lastDot + 1, strLength - lastDot );
	extension = extension.toLowerCase();
	for (var i = 0; i < inArrayOfFileExtensions.length; i++ ) {
		if ( extension == inArrayOfFileExtensions[i] ) {
			return true;
		}
	}
	return false;
}



		
function process() {

	if (documents.length == 0) {
		alert("There are no documents open.");
		return;
	}
	
	
	if(isDocumentNew()) {        
		alert("New document must saved before script can proceed. Save and try again.");
		return;
	} 
	 
	
	w = app.activeDocument.width.as('px');
	h = app.activeDocument.height.as('px');
		
	//if (parseInt(w)!=parseInt(h) || 864!=parseInt(w))
    if (parseInt(w)!=parseInt(h))
	{
		alert("Current size is ("+w+"x"+h+"), but image must be square.");
		return;
	}
	 
	var docRef = app.activeDocument;
	 
	var layerComps = docRef.layerComps;
	var numLayerComps = layerComps.length;
	var layers = docRef.layers;
	var numLayers = layers.length;
	 
	var icLauncherIconSizes = [
		["192px","192px", "xxxhdpi" ],
		["144px","144px", "xxhdpi"  ],
		["96px" , "96px", "xhdpi"   ],
		["72px" , "72px", "hdpi"    ],
		["48px" , "48px", "mdpi"    ]		
	]; 
    
    var icNotifyIconSizes = [
		["96px" , "96px", "xxxhdpi" ],
		["72px" , "72px", "xxhdpi"  ],
		["48px" , "48px", "xhdpi"   ],
		["36px" , "36px", "hdpi"    ],
		["24px" , "24px", "mdpi"    ]		
	]; 
    
    var imageSizes=icLauncherIconSizes;

	var proceed=false;
	var exportType=PROJECT_TYPE_ANDROID_STUDIO; // 0 = mipmap folder ; PROJECT_TYPE_ANDROID_STUDIO 		||||| 		1 = drawable folder ;PROJECT_TYPE_ECLIPSE 	<<<<---------------------------------------------------
	var rootFolder=docRef.path.fsName;

	var dlg = new Window("dialog{text:'"+APP+" - "+VERSION+" by "+AUTHOR+"',alignChildren: ['fill', 'top'],  \
		preferredSize:[500, 200], \
		buh: StaticText { text:'This script creates, from current image, different resolution png to use as ic_launcher for Android Platform.'},\
		folder: Panel { \
            text: ' Folder for export ', \
			orientation: 'row', \
			alignChildren: 'left', \
			margins:15, \
            chkBoxDefaultRoot: Checkbox { text:'Psd folder is in project folder', value: true }, \
			txtValue:EditText{ text:'' , characters: 80 , properties:{multiline:false,noecho:false}},\
			btnBrowse:Button{ text:'...' }\
        },\
        info : Group {  width: 100%,\
                        info: StaticText { width: 100%, text:'', characters: 120}\
            },\
        iconType: Panel { \
			text: ' Icon type ', \
			orientation: 'row', \
			alignChildren: 'left', \
			margins:15,\
			buh: StaticText { text:'Icon type: '},\
			ddlIconType: DropDownList { properties:{items:['Launcher icons','Notify icons'] }}\
		},\
        exportType: Panel { \
			text: ' Export folder and filename ', \
			orientation: 'row', \
			alignChildren: 'left', \
			margins:15,\
			buh: StaticText { text:'Project structure: '},\
			ddlProjectStyle: DropDownList { properties:{items:['Create in mipmap-* subfolders','Create in drawable-* subfolders'] }}\
			buh2: StaticText { text:'File name: '},\
			txtFileName:EditText{ text:'' , characters: 20 , properties:{multiline:false,noecho:false}},\
		},\
        separator : Panel { width: 100%, height: 2 , margins:15},\
		buttons : Group { \
			btnSave:	Button	{ text:'Save'	, size: [120,24], alignment:['right', 'center'] },\
			btnCancel:	Button	{ text:'Cancel'	, size: [120,24], alignment:['right', 'center'] }\
		}\
	};");
            
	dlg.folder.txtValue.text=rootFolder;
    dlg.folder.chkBoxDefaultRoot.value=true;
    dlg.folder.txtValue.enabled=false;
    dlg.folder.btnBrowse.enabled=false;
    dlg.info.info.text='Files will be created in '+unescape(rootFolder+ANDROID_STUDIO_RELATIVE_PATH);
    dlg.exportType.txtFileName.text=docRef.name.substr(0,docRef.name.length-4); // path.fsName; // "ic_launcher";
    		
    
    dlg.iconType.ddlIconType.selection=0; 
    dlg.iconType.ddlIconType.onChange = function(){  
        // LAUNCHER
		if (dlg.iconType.ddlIconType.selection == 0)
        {
            // if notification, write icons in mipmap
            dlg.exportType.ddlProjectStyle.selection=0;
            imageSizes=icLauncherIconSizes;
            dlg.exportType.txtFileName.text="ic_launcher";
        }
        // NOTIFICATION
		if (dlg.iconType.ddlIconType.selection == 1)
        {
            // if notification, write icons in drawable
            dlg.exportType.ddlProjectStyle.selection=1;
            imageSizes=icNotifyIconSizes;
            dlg.exportType.txtFileName.text="ic_notification";
        }
	}  
    
	dlg.exportType.ddlProjectStyle.selection=0; // 0 = mipmap folder ; 1 = drawable folder 	<<<<---------------------------------------------------
	dlg.exportType.ddlProjectStyle.onChange = function(){  
		if (dlg.exportType.ddlProjectStyle.selection == 0) exportType=PROJECT_TYPE_ANDROID_STUDIO;
		if (dlg.exportType.ddlProjectStyle.selection == 1) exportType=PROJECT_TYPE_ECLIPSE;			
	}  
	dlg.folder.btnBrowse.onClick = function() {  
		var dir = Folder(dlg.folder.txtValue.text);
		var baseFolder = dir.selectDlg('Select a root folder to save images ');

		if (baseFolder==null)
		{
			return;
		}
		dlg.folder.txtValue.text=unescape(baseFolder);
		rootFolder=baseFolder;	
	}
    
    dlg.folder.chkBoxDefaultRoot.onClick = function() {
        rootFolder=docRef.path.fsName;
        dlg.folder.txtValue.text=unescape(rootFolder);      
        
        if (!dlg.folder.chkBoxDefaultRoot.value)
        {
            dlg.folder.txtValue.enabled=true;
            dlg.folder.btnBrowse.enabled=true;
            dlg.info.info.text='Files will be created in '+unescape(rootFolder);
        } else {
            dlg.folder.txtValue.enabled=false;
            dlg.folder.btnBrowse.enabled=false;
            dlg.info.info.text='Files will be created in '+unescape(rootFolder+ANDROID_STUDIO_RELATIVE_PATH);
        }
    }
	dlg.buttons.btnSave.onClick = function() {
		var folder=Folder(dlg.folder.txtValue.text);
		if(folder.exists) {
			rootFolder=dlg.folder.txtValue.text;
		} else {
			rootFolder=null;
		}
	
		if(exportType == null) {
			alert("Export type must be defined!");  
			return;
		}
		if (rootFolder==null ) {  
			alert("Root folder must exists!");  
			return;  
		}  	  
		proceed=true;
		dlg.close(1);
	}
	dlg.buttons.btnCancel.onClick = function() {     
		proceed=false;
		dlg.close(1);
	}  

	dlg.center();
	dlg.show();

	if (!proceed)
	{
		return;
	}

	var exportOptionsSaveForWeb = new ExportOptionsSaveForWeb();
    
	exportOptionsSaveForWeb.format = SaveDocumentType.PNG;
	exportOptionsSaveForWeb.includeProfile = true;
	exportOptionsSaveForWeb.PNG8 = false; 
	exportOptionsSaveForWeb.transparency = true; 
	exportOptionsSaveForWeb.interlaced = false; 
	exportOptionsSaveForWeb.quality = 100;

	parentFolderPath = Folder(app.activeDocument.fullName.parent).fsName;
    
    var subFolder='';         
    if (dlg.folder.chkBoxDefaultRoot.value)
    {
        subFolder=ANDROID_STUDIO_RELATIVE_PATH;                             
    } 
    
    var baseSubFolder=Folder(rootFolder+subFolder);
    if(!baseSubFolder.exists) {            
        baseSubFolder.create();
    }
	 
	// 1. Loop through the image sizes.
	var numImageSizes = imageSizes.length;
	for (var i = 0; i < numImageSizes; i++) {
		var currentImageSize = imageSizes[i];
		var currentImageWidth = currentImageSize[0];
		var currentImageHeight = currentImageSize[1];
		var currentImageResolution = currentImageSize[2];
		
		// Save the history state.
		var savedState = docRef.activeHistoryState;
		
		// Resize to the desired image size.
		docRef.resizeImage(currentImageWidth, currentImageHeight, null, ResampleMethod.BICUBIC);
		
        var documentPath;
		if (exportType==PROJECT_TYPE_ANDROID_STUDIO)
		{
			documentPath=baseSubFolder+"/mipmap-"+currentImageResolution;
		} else {
			documentPath=baseSubFolder+"/drawable-"+currentImageResolution;
		}    
    
		var folder=Folder(documentPath);
		if(!folder.exists) {
			folder.create();
		}
		
		var documentFile = documentPath +"/"+dlg.exportType.txtFileName.text+".png";
		var file = new File(documentFile);
			
		// Save image
		docRef.exportDocument (file, ExportType.SAVEFORWEB, exportOptionsSaveForWeb);
			
		// Restore the history state to return to the full-sized image.
		docRef.activeHistoryState = savedState;
		
	}
	
	alert('Export complete. '+numImageSizes+' images generated.');
}

