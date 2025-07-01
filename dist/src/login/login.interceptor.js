"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginInterceptor = void 0;
const common_1 = require("@nestjs/common");
const rxjs_1 = require("rxjs");
let LoginInterceptor = class LoginInterceptor {
    intercept(context, next) {
        console.log(' [Interceptor] Before Controller');
        const now = Date.now();
        return next.handle().pipe((0, rxjs_1.tap)((data) => {
            console.log(' [Interceptor] After Controller Execution');
            console.log(' [Interceptor] Before Response is Sent - Response Data:', data);
        }), (0, rxjs_1.finalize)(() => {
            console.log(` [Interceptor] After Response Sent - Total time: ${Date.now() - now}ms`);
        }));
    }
};
exports.LoginInterceptor = LoginInterceptor;
exports.LoginInterceptor = LoginInterceptor = __decorate([
    (0, common_1.Injectable)()
], LoginInterceptor);
//# sourceMappingURL=login.interceptor.js.map