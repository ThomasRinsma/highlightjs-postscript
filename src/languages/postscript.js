/*
Language: PostScript
Author: Thomas Rinsma <thomasrinsma@protonmail.com>
Description: language definition for PostScript files
Category: Document
*/

module.exports = function (hljs) {
	const KEYWORDS = {
		keyword:
			"abs add aload anchorsearch and arc arcn arct arcto array ashow astore atan awidthshow " +
			"begin bind bitshift bytesavailable " + 
			"cachestatus ceiling charpath clear cleartomark cleardictstack clip clippath closefile " +
			"closepath colorimage concat concatmatrix condition configurationerror copy copypage " +
			"cos count countdictstack countexecstack counttomark cshow currentblackgeneration " +
			"currentcacheparams currentcmykcolor currentcolor currentcolorrendering " +
			"currentcolorscreen currentcolorspace currentcolortransfer currentcontext currentdash " +
			"currentdevparams currentdict currentfile currentflat currentfont currentglobal " +
			"currentgray currentgstate currenthalftone currenthalftonephase currenthsbcolor " +
			"currentlinecap currentlinejoin currentlinewidth currentmatrix currentmiterlimit " +
			"currentobjectformat currentpacking currentpagedevice currentpoint currentrgbcolor " +
			"currentscreen currentshared currentstrokeadjust currentsystemparams currenttransfer " +
			"currentundercolorremoval currentuserparams curveto cvi cvlit cvn cvr cvrs cvs cvx " +
			"def defaultmatrix definefont defineresource defineusername defineuserobject " +
			"deletefile detach deviceinfo dict dictfull dictstack dictstackoverflow " +
			"dictstackunderflow div dtransform dup echo|0 eexec end eoclip eofill eoviewclip " +
			"eq erasepage errordict exch exec execform execstack execstackoverflow execuserobject " +
			"executeonly executive exit exp false file filenameforall fileposition fill filter " +
			"findencoding findfont findresource flattenpath floor flush flushfile FontDirectory " +
			"for forall fork ge get getinterval globaldict GlobalFontDirectory glyphshow grestore " +
			"grestoreall gsave gstate gt handleerror identmatrix idiv idtransform if|0 ifelse image " +
			"imagemask index ineofill infill initclip initgraphics initmatrix initviewclip instroke " +
			"internaldict interrupt inueofill inufill inustroke invalidaccess invalidcontext " +
			"invalidexit invalidfileaccess invalidfont invalidid invalidrestore invertmatrix " +
			"ioerror ISOLatin1Encoding itransform join kshow known languagelevel le length limitcheck " +
			"lineto ln load lock log loop lt makefont makepattern mark matrix maxlength mod monitor " +
			"moveto mul ne neg newpath noaccess nocurrentpoint not notify null nulldevice or " +
			"packedarray pathbbox pathforall pop print printobject product prompt pstack put " +
			"putinterval quit rand rangecheck rcurveto read readhexstring readline readonly readstring " +
			"realtime rectclip rectfill rectstroke rectviewclip renamefile repeat resetfile " +
			"resourceforall resourcestatus restore reversepath revision rlineto rmoveto roll " +
			"rootfont rotate round rrand run save scale scalefont scheck search selectfont " +
			"serialnumber setbbox setblackgeneration setcachedevice setcachedevice2 setcachelimit " +
			"setcacheparams setcharwidth setcmykcolor setcolor setcolorrendering setcolorscreen " +
			"setcolorspace setcolortransfer setdash setdevparams setfileposition setflat setfont " +
			"setglobal setgray setgstate sethalftone sethalftonephase sethsbcolor setlinecap " +
			"setlinejoin setlinewidth setmatrix setmiterlimit setobjectformat setoverprint " +
			"setpacking setpagedevice setpattern setrgbcolor setscreen setshared setstrokeadjust " +
			"setsystemparams settransfer setucacheparams setundercolorremoval setuserparams " +
			"setvmthreshold shareddict show showpage sin sqrt srand stack stackoverflow " +
			"stackunderflow StandardEncoding start startjob status statusdict stop stopped store " +
			"string stringwidth stroke strokepath sub syntaxerror systemdict timeout transform " +
			"translate true truncate type typecheck token uappend ucache ucachestatus ueofill " +
			"ufill undef undefined undefinedfilename undefineresource undefinedresult undefinefont " +
			"undefineresource undefinedresource undefineuserobject unmatchedmark unregistered upath " +
			"userdict UserObjects usertime ustroke ustrokepath version viewclip viewclippath VMerror " +
			"vmreclaim vmstatus wait wcheck where widthshow write|0 writehexstring writeobject " +
			"writestring wtranslation xcheck xor xshow xyshow yield yshow",
	};

	const NUMBERS = {
		scope: 'number',
		match: hljs.regex.either(
			/\b[0-9]+#[0-9a-fA-F]+\b/, // radix numbers: 8#1777 16#FFFE 2#1000
			/([-+]?)(\b0[0-9]+|(\b\d+(\.\d*)?|\.\d+)([eE][-+]?\d+)?)/ // real numbers: 123 −98 43445 0 +17 −.002 34.5 −3.62 123.6e10 1.0E−5 1E6 −1. 0.0
		),
		relevance: 0
	};

	const STRINGS = {
		scope: 'string',
		begin: '\\(',
		end: '\\)',
		illegal: '',
		contains: [hljs.BACKSLASH_ESCAPE],
		relevance: 5
	};

	const BYTE_STRINGS = {
		scope: 'string',
		match: /<([0-9a-fA-F\s]*)>/,
		relevance: 0
	}

	const NAMES = {
		scope: 'variable',
		match: /\/[^\s]+/,
		relevance: 0,
		relevance: 2
	};

	return {
		aliases: ['ps', 'postscript'],
		keywords: KEYWORDS,
		contains: [
			hljs.COMMENT('%', '$', {
				className: 'comment'
			}),
			STRINGS,
			BYTE_STRINGS,
			NUMBERS,
			NAMES,
		]
	};
}