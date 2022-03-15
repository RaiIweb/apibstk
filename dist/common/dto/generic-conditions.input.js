"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SortOrder = exports.WhereHasConditionsRelation = exports.WhereHasConditions = exports.SQLOperator = void 0;
const eager_import_0 = require("./generic-conditions.input");
const graphql_1 = require("@nestjs/graphql");
var SQLOperator;
(function (SQLOperator) {
    SQLOperator["EQ"] = "EQ";
    SQLOperator["NEQ"] = "NEQ";
    SQLOperator["GT"] = "GT";
})(SQLOperator = exports.SQLOperator || (exports.SQLOperator = {}));
(0, graphql_1.registerEnumType)(SQLOperator, {
    name: 'SQLOperator',
});
let WhereHasConditions = class WhereHasConditions {
    constructor() {
        this.operator = SQLOperator.EQ;
    }
    static _GRAPHQL_METADATA_FACTORY() {
        return { operator: { type: () => Object }, value: { type: () => String } };
    }
};
__decorate([
    (0, graphql_1.Field)(() => SQLOperator, { defaultValue: SQLOperator.EQ }),
    __metadata("design:type", Object)
], WhereHasConditions.prototype, "operator", void 0);
WhereHasConditions = __decorate([
    (0, graphql_1.InputType)()
], WhereHasConditions);
exports.WhereHasConditions = WhereHasConditions;
let WhereHasConditionsRelation = class WhereHasConditionsRelation {
    constructor() {
        this.amount = 1;
    }
    static _GRAPHQL_METADATA_FACTORY() {
        return { relation: { type: () => String }, operator: { type: () => require("./generic-conditions.input").SQLOperator }, amount: { type: () => Object } };
    }
};
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Object)
], WhereHasConditionsRelation.prototype, "amount", void 0);
WhereHasConditionsRelation = __decorate([
    (0, graphql_1.InputType)()
], WhereHasConditionsRelation);
exports.WhereHasConditionsRelation = WhereHasConditionsRelation;
var SortOrder;
(function (SortOrder) {
    SortOrder["ASC"] = "asc";
    SortOrder["DESC"] = "desc";
})(SortOrder = exports.SortOrder || (exports.SortOrder = {}));
(0, graphql_1.registerEnumType)(SortOrder, {
    name: 'SortOrder',
});
//# sourceMappingURL=generic-conditions.input.js.map