import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {Router} from '@angular/router';
import {catchError, tap} from 'rxjs/operators';
import {NbToastrService} from '@nebular/theme';
import {OrdersCounterService} from '../dashboard/shared/orders-counter.service';

@Injectable()
export class AppHttpInterceptor implements HttpInterceptor {

    constructor(private snackBar: NbToastrService,
                private readonly router: Router,
                private orderService: OrdersCounterService) {
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(
            tap((event: HttpResponse<any>) => {
                switch (event.status) {
                    case 201 :
                        this.snackBar.success('Creat cu succes!', '', {duration: 5000});
                        this.orderService.updateCounter();
                        break;
                    case 202 :
                        this.snackBar.success('Actualizată cu succes!', '', {duration: 5000});
                        break;
                    case 204 :
                        this.snackBar.success('Șters cu succes!', '', {duration: 5000});
                        break;
                }
            }),
            catchError((err: HttpErrorResponse) => {
                let data;
                if (err.error) {
                    data = {title: err.error.message};
                } else {
                    data = {title: err.message};
                }
                if (err.error instanceof Error) {
                    //     // A client-side or network error occurred.
                    this.snackBar.show(data.title, '', {duration: 10000});
                } else {
                    // The backend returned an unsuccessful response code.
                    // The response body may contain clues as to what went wrong,
                    if (!(err.status === 401 && (err.error.name === '' || (err.error.message && err.error.message.indexOf('/api/accounts/me') > -1)))) {
                        switch (err.status) {
                            case 400:
                                let message = 'Solicitare incorectă, vă rugăm să verificați datele dumneavoastră!';
                                if (err.error) {
                                    message = err.error.message;
                                    if (err.error.errors && err.error.errors.length) {
                                        const errors = err.error.errors;
                                        for (const error of errors) {
                                            if (error.constraints.isNotEmpty || error.constraints.isDefined) {
                                                message = 'Cimpurile obligatorii nu au fost completate';
                                            }
                                        }
                                    }
                                }
                                this.snackBar.warning(JSON.stringify(err.error.message),
                                    'Eroare de validare', {duration: 15000});
                                break;
                            case 401:
                                this.snackBar.danger(data.title, '', {duration: 5000});
                                break;
                            case 403:
                                this.snackBar.warning('Nu aveți permisiunea necesare pentru a accesa aceasta pagina!', '', {duration: 5000});
                                this.router.navigate(['.']).catch(console.error);
                                break;
                            case 404:
                                this.snackBar.warning('Destinație inexistentă, contactați administratorul!', '', {duration: 5000});
                                break;
                            case 500:
                                this.snackBar.danger('A intervenit o eroare pe server!', 'Ups! error 500' , {
                                    duration: 10000
                                });
                                break;
                            case 504:
                              this.snackBar.danger('Reincarcati pagina un pic mai tirziu!', 'Serverul nu raspunde!' , {
                                duration: 10000
                              });
                                break;
                        }
                    }
                }
                return throwError(err);
            })
        );
    }
}
