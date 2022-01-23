(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{1001:function(t,e,a){"use strict";a.r(e);var v=a(45),o=Object(v.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"layoutgrid"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#layoutgrid"}},[t._v("#")]),t._v(" LayoutGrid")]),t._v(" "),a("p",[a("code",[t._v("LayoutGrid")]),t._v(" divides a horizontal space into a number of columns evenly, helps align elements based on sequenced columns and rows.")]),t._v(" "),a("Doc-LayoutGridDoc"),t._v(" "),a("h2",{attrs:{id:"usage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),a("ul",[a("li",[t._v("In a "),a("code",[t._v("LayoutGrid")]),t._v(", content must be placed within "),a("code",[t._v("LayoutGridCell")]),t._v(".")]),t._v(" "),a("li",[a("code",[t._v("span")]),t._v(" of "),a("code",[t._v("LayoutGridCell")]),t._v(" indicates the number of columns you’d like to use out of the columns per row.")]),t._v(" "),a("li",[a("code",[t._v("LayoutGridCell")]),t._v(" are seperated by "),a("code",[t._v("gap")]),t._v(" of "),a("code",[t._v("LayoutGrid")]),t._v(".")]),t._v(" "),a("li",[t._v("Place a "),a("code",[t._v("LayoutGridRowBreak")]),t._v(" to break the subsequent "),a("code",[t._v("LayoutGridCell")]),t._v(" into a new row.")]),t._v(" "),a("li",[t._v("Only "),a("code",[t._v("LayoutGridCell")]),t._v(" and "),a("code",[t._v("LayoutGridRowBreak")]),t._v(" may be immediate children of "),a("code",[t._v("LayoutGrid")]),t._v(".")])]),t._v(" "),a("vue-live",{attrs:{layoutProps:{lang:"vue"},code:'<LayoutGrid\n\tcolumn-count="12"\n\tgap-x="5"\n\tgap-y="5"\n>\n\t<LayoutGridCell span="4">\n\t\t<GreyBox name="4" />\n    </LayoutGridCell>\n\t<LayoutGridCell span="2" />\n\t<LayoutGridCell span="2">\n\t\t<GreyBox name="2" />\n    </LayoutGridCell>\n\n\t<LayoutGridRowBreak />\n\n\t<LayoutGridCell span="3">\n\t\t<GreyBox name="3" />\n    </LayoutGridCell>\n\t<LayoutGridCell span="3">\n\t\t<GreyBox name="3" />\n    </LayoutGridCell>\n\t<LayoutGridCell span="6">\n\t\t<GreyBox name="6" />\n    </LayoutGridCell>\n</LayoutGrid>\n',requires:{}}}),a("h2",{attrs:{id:"props"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#props"}},[t._v("#")]),t._v(" Props")]),t._v(" "),a("h3",{attrs:{id:"layoutgrid-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#layoutgrid-2"}},[t._v("#")]),t._v(" LayoutGrid")]),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/components/#padding-props"}},[t._v("padding props")])],1)]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Property")]),t._v(" "),a("th",[t._v("Description")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Default")]),t._v(" "),a("th",[t._v("Value")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("columnCount")]),t._v(" "),a("td",[t._v("number of columns")]),t._v(" "),a("td",[t._v("Number, String")]),t._v(" "),a("td",[t._v("12")]),t._v(" "),a("td",[t._v("positive integer")])]),t._v(" "),a("tr",[a("td",[t._v("gap")]),t._v(" "),a("td",[t._v("gap size between columns and rows")]),t._v(" "),a("td",[t._v("Number, String")]),t._v(" "),a("td",[t._v("0")]),t._v(" "),a("td",[t._v("spacing scale")])]),t._v(" "),a("tr",[a("td",[t._v("gapX")]),t._v(" "),a("td",[t._v("horizontal gap size between columns")]),t._v(" "),a("td",[t._v("Number, String")]),t._v(" "),a("td",[t._v("0")]),t._v(" "),a("td",[t._v("spacing scale")])]),t._v(" "),a("tr",[a("td",[t._v("gapY")]),t._v(" "),a("td",[t._v("vertical gap size between rows")]),t._v(" "),a("td",[t._v("Number, String")]),t._v(" "),a("td",[t._v("0")]),t._v(" "),a("td",[t._v("spacing scale")])]),t._v(" "),a("tr",[a("td",[t._v("verticalAlign")]),t._v(" "),a("td",[t._v("vertical align contents in rows")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("stretch")]),t._v(" "),a("td",[t._v("top, center, bottom, stretch")])])])]),t._v(" "),a("h3",{attrs:{id:"layoutgridcell"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#layoutgridcell"}},[t._v("#")]),t._v(" LayoutGridCell")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Property")]),t._v(" "),a("th",[t._v("Description")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Default")]),t._v(" "),a("th",[t._v("Value")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("span")]),t._v(" "),a("td",[t._v("number of columns to use")]),t._v(" "),a("td",[t._v("Number, String")]),t._v(" "),a("td",[t._v("1")]),t._v(" "),a("td",[t._v("positive integer ≤ "),a("code",[t._v("columnCount")])])])])])],1)}),[],!1,null,null,null);e.default=o.exports}}]);