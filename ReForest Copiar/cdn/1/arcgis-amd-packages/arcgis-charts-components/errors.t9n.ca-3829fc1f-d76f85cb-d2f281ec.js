/*! For license information please see errors.t9n.ca-3829fc1f-d76f85cb-d2f281ec.js.LICENSE.txt */
define(["exports"],(function(e){"use strict";const a="S'ha produït un error en carregar el gràfic.",i="Nombre de barres totals d'aquest gràfic: ${ elementCount } Els gràfics de barres amb una sèrie estan limitats a ${ totalLimit } barres. Trieu un camp Categoria amb menys valors únics o apliqueu un filtre a les vostres dades.",t="Els gràfics de barres amb dues sèries estan limitats a ${ totalLimit } barres o a ${ seriesLimit } barres per sèrie. Trieu un camp Categoria amb menys valors únics o apliqueu un filtre a les vostres dades.",s="Els gràfics de barres amb tres sèries o més estan limitats a ${ totalLimit } barres o a ${ seriesLimit } barres per sèrie. Trieu un camp Categoria amb menys valors únics o apliqueu un filtre a les vostres dades.",r="Els gràfics de barres estan limitats a ${ seriesLimit } sèries. Trieu un camp Divideix per amb menys valors únics",n="S'ha produït un error en crear el gràfic.",o="No es pot aplicar una transformació del registre a valors negatius o de zero.",u="No es pot aplicar una transformació d'arrel quadrada a valors negatius.",l="S'ha produït un error en carregar la capa. URL = ${ url }. ID d'element del portal = ${ portalItemId }.",m="L'element ${ dataPath } ha de ser únic. L'ID (${ seriesID }) de la sèrie anomenada ${ seriesName } ja l'utilitza una altra sèrie.",d="${ dataPath } no pot dur a terme una agregació que no sigui de recompte en un camp que no sigui numèric.",c="A ${ dataPath } li falta una propietat anomenada ${ missingProperty }.",p="${ dataPath } no pot tenir menys de ${ limit } caràcters.",C="${ dataPath } no pot tenir menys de ${ limit } elements.",g="${ dataPath } no pot tenir més de ${ limit } elements.",L="${ dataPath } ha de tenir almenys un caràcter que no sigui un espai en blanc.",x="${ dataPath } no pot tenir ${ additionalProperty }.",b="${ dataPath } ha de ser igual a un d'aquests valors permesos: ${ allowedValues }.",E="${ dataPath } ha de coincidir amb l'esquema d'un d'aquests: ${ schemaOptions }.",v="No s'admeten gràfics de dispersió amb símbols proporcionals. S'ha aplicat la mida de símbol per defecte.",$="Error de lectura de les dades d'entrada.",f="Els histogrames necessiten com a mínim dos valors numèrics.",h='El tipus de sèrie esperat a l\'índex ${ seriesIndex } és "${ expectedType }", però s\'ha rebut el tipus "${ receivedType }"',S="Assegureu-vos que els valors que retorni el total de la suma dels camps numèrics siguin tots positius o tots negatius.",q="Nombre total de sectors en aquest gràfic: ${ sliceCount } Els gràfics circulars poden tenir ${ totalLimit } sectors com a màxim. Trieu un camp Categoria amb menys valors únics, afegiu menys camps numèrics o apliqueu un filtre a les vostres dades.",y="Els calibradors basats en entitats estan limitats a ${ totalLimit } entitats. Filtreu les dades.",P="Hi ha un total de ${ elementCount } marcadors en aquest gràfic. Els gràfics de línies amb una sèrie estan limitats a ${ totalLimit } marcadors. Trieu un camp Categoria amb menys valors únics o apliqueu un filtre a les vostres dades.",T="Els gràfics de línies amb dues sèries estan limitats a ${ totalLimit } marcadors o a ${ seriesLimit } marcadors per sèrie. Trieu un camp Categoria amb menys valors únics o apliqueu un filtre a les vostres dades.",I="Els gràfics de línies amb tres sèries o més estan limitats a ${ totalLimit } marcadors o a ${ seriesLimit } marcadors per sèrie. Trieu un camp Categoria amb menys valors únics o apliqueu un filtre a les vostres dades.",B="Els gràfics de línies estan limitats a ${ seriesLimit } sèries. Trieu un camp Divideix per amb menys valors únics",D="Hi ha un total de ${ elementCount } caixes en aquest gràfic. Els diagrames de caixa amb una sèrie estan limitats a ${ totalLimit } caixes. Trieu un camp Categoria amb menys valors únics o apliqueu un filtre a les vostres dades.",V="Els diagrames de caixa amb dues sèries estan limitats a ${ totalLimit } caixes o a ${ seriesLimit } caixes per sèrie. Trieu un camp Categoria amb menys valors únics o apliqueu un filtre a les vostres dades.",F="Els diagrames de caixa amb tres sèries o més estan limitats a ${ totalLimit } caixes o a ${ seriesLimit } caixes per sèrie. Trieu un camp Categoria amb menys valors únics o apliqueu un filtre a les vostres dades.",N="Els diagrames de caixa estan limitats a ${ seriesLimit } sèries. Trieu un camp Divideix per amb menys valors únics",w="Els diagrames de caixa només poden mostrar fins a ${ totalLimit } punts de valors atípics. Filtreu les dades.";var O={defaultError:a,uniqueSeriesBarCountCannotExceedLimit:i,twoSeriesBarCountCannotExceedLimit:t,threePlusSeriesBarCountCannotExceedLimit:s,barSeriesCountCannotExceedLimit:r,defaultInvalidChart:n,negativeValueInDataForLogTransformation:o,negativeValueInDataForSqrtTransformation:u,layerLoadFailure:l,duplicateSeriesID:m,nonNumericAggregation:d,requiredProperty:c,minLength:p,minItems:C,maxItems:g,whiteSpacePattern:L,additionalProperty:x,enumValues:b,anyOfValues:E,bubbleChartValidateMsg:v,queryError:$,histogramEmptyField:f,invalidSeriesType:h,or:"o",pieChartCannotHaveMixtureOfPositiveAndNegativeSlices:S,pieChartSlicesCannotExceedLimit:q,gaugeCannotExceedLimit:y,uniqueSeriesLineCountCannotExceedLimit:P,twoSeriesLineCountCannotExceedLimit:T,threePlusSeriesLineCountCannotExceedLimit:I,lineSeriesCountCannotExceedLimit:B,uniqueSeriesBoxCountCannotExceedLimit:D,twoSeriesBoxCountCannotExceedLimit:V,threePlusBoxLineCountCannotExceedLimit:F,boxSeriesCountCannotExceedLimit:N,boxSeriesOutlierCannotExceedLimit:w};e.additionalProperty=x,e.anyOfValues=E,e.barSeriesCountCannotExceedLimit=r,e.boxSeriesCountCannotExceedLimit=N,e.boxSeriesOutlierCannotExceedLimit=w,e.bubbleChartValidateMsg=v,e.default=O,e.defaultError=a,e.defaultInvalidChart=n,e.duplicateSeriesID=m,e.enumValues=b,e.gaugeCannotExceedLimit=y,e.histogramEmptyField=f,e.invalidSeriesType=h,e.layerLoadFailure=l,e.lineSeriesCountCannotExceedLimit=B,e.maxItems=g,e.minItems=C,e.minLength=p,e.negativeValueInDataForLogTransformation=o,e.negativeValueInDataForSqrtTransformation=u,e.nonNumericAggregation=d,e.or="o",e.pieChartCannotHaveMixtureOfPositiveAndNegativeSlices=S,e.pieChartSlicesCannotExceedLimit=q,e.queryError=$,e.requiredProperty=c,e.threePlusBoxLineCountCannotExceedLimit=F,e.threePlusSeriesBarCountCannotExceedLimit=s,e.threePlusSeriesLineCountCannotExceedLimit=I,e.twoSeriesBarCountCannotExceedLimit=t,e.twoSeriesBoxCountCannotExceedLimit=V,e.twoSeriesLineCountCannotExceedLimit=T,e.uniqueSeriesBarCountCannotExceedLimit=i,e.uniqueSeriesBoxCountCannotExceedLimit=D,e.uniqueSeriesLineCountCannotExceedLimit=P,e.whiteSpacePattern=L}));