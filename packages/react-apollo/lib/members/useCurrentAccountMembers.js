"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_tag_1 = __importDefault(require("graphql-tag"));
const react_apollo_hooks_1 = require("react-apollo-hooks");
const FIND_CURRENT_ACCOUNT_MEMBERS_QUERY = graphql_tag_1.default `
  query CurrentAccountMembers {
    findCurrentAccountMembers {
      id
    }
  }
`;
exports.use = (opts) => react_apollo_hooks_1.useMutation(FIND_CURRENT_ACCOUNT_MEMBERS_QUERY, opts);
//# sourceMappingURL=useCurrentAccountMembers.js.map