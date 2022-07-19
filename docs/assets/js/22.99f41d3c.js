(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{287:function(t,a,s){"use strict";s.r(a);var n=s(13),e=Object(n.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"schema-reporting"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#schema-reporting"}},[t._v("#")]),t._v(" Schema Reporting")]),t._v(" "),a("p",[t._v("The "),a("code",[t._v("caliban-reporting")]),t._v(" module allows you to integrate with Apollo's "),a("a",{attrs:{href:"https://www.apollographql.com/docs/studio/schema/schema-reporting-protocol/",target:"_blank",rel:"noopener noreferrer"}},[t._v("schema reporting protocol"),a("OutboundLink")],1),t._v(".\nThis enables your servers to automatically publish updated schemas on start up without involving any additional tooling.")]),t._v(" "),a("p",[t._v("You can enable the settings by providing the "),a("code",[t._v("ReportingDaemon")]),t._v(" to your "),a("code",[t._v("Runtime")]),t._v(" during setup.")]),t._v(" "),a("div",{staticClass:"language-scala extra-class"},[a("pre",{pre:!0,attrs:{class:"language-scala"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Define your GraphQL schema normally")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" api"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" GraphQL"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Any")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" graphQL"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("RootResolver"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Queries"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  characters "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" List"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Character"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Amos"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Define a SchemaReporter that will communicate with Apollo")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" reporterL "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" SchemaReporter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fromDefaultConfig "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// Loads the access token from an environment variable called "APOLLO_KEY"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Or load it from a configuration type")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// val reporterL = (ZLayer.service[ApolloConfig] ++ AsyncHttpClientZioBackend.layer()) >>> SchemaReporter.fromConfig[ApolloConfig](_.key)")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Define your graph references")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" daemon"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" URManaged"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Random "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("with")]),t._v(" Has"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("ReportingDaemon"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Unit")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  graph1 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("<-")]),t._v(" SchemaReportingRef"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("make"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("api"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"my-graph@production"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("toManaged_\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// For dynamic or possibly updating schemas you can provide a Ref and a transform function that will allow")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// you to push schema updates that occur at runtime.")]),t._v("\n  ref "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("<-")]),t._v(" Ref"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("makeManaged"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"schema { query: Query }\\n type Query { hello: String! }"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  graph2 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("<-")]),t._v(" SchemaReportingRef"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fromRef"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ref"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"dynamic-graph@production"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("identity"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("toManaged_\n  _ "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("<-")]),t._v(" ReportingDaemon"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("register"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("graph1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  _ "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("<-")]),t._v(" ReportingDaemon"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("register"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("graph2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("yield")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Now wire it up")]),t._v("\ndaemon"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("useForever\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("provideCustomLayer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("reporterL "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>>")]),t._v(" ReportingDaemon"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("live"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);