// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE
'use strict';

var Json_decode = require("@glennsl/bs-json/src/Json_decode.bs.js");
var JsonStrict$OptolithClient = require("../Utilities/YAML/JsonStrict.bs.js");

function tL10n(json) {
  return {
          id: Json_decode.field("id", Json_decode.$$int, json),
          name: Json_decode.field("name", Json_decode.string, json)
        };
}

function tUniv(json) {
  return {
          id: Json_decode.field("id", Json_decode.$$int, json),
          numId: Json_decode.field("numId", Json_decode.$$int, json),
          primary: Json_decode.field("primary", Json_decode.$$int, json),
          aspects: Json_decode.field("aspects", (function (param) {
                  return JsonStrict$OptolithClient.maybe((function (param) {
                                return Json_decode.pair(Json_decode.$$int, Json_decode.$$int, param);
                              }), param);
                }), json)
        };
}

function t(univ, l10n) {
  return {
          id: univ.id,
          numId: univ.numId,
          name: l10n.name,
          primary: univ.primary,
          aspects: univ.aspects
        };
}

var Decode = {
  tL10n: tL10n,
  tUniv: tUniv,
  t: t
};

exports.Decode = Decode;
/* No side effect */
