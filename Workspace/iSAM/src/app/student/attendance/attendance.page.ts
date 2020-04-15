import {Component, OnInit, ViewChild} from '@angular/core';
import {NavController} from '@ionic/angular';
import * as firebase from 'firebase/app';
import {FirebaseService} from 'src/app/services/firebase.service';
import {Router} from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database/';
import { AngularFireList } from '@angular/fire/database/';
import {Chart} from 'chart.js';

@Component({selector: 'app-attendance', templateUrl: './attendance.page.html', styleUrls: ['./attendance.page.scss']})
export class AttendancePage implements OnInit {
    
    constructor(private router: Router, private authService: FirebaseService, public navCtrl: NavController) {}

    ngOnInit() {
        this.showChart();
    }

    showChart() {
        var ctx = (<any>document.getElementById('chart')).getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['CS', 'Java', '.Net', 'HCI', 'Web', 'Security'],
                datasets: [{
                    label: 'No. of attended sessions',
                    data: [12, 19, 8, 12, 4, 7],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        });
    }
    
    goSettings() {
        this.router.navigate(['Student/Settings']);
        console.log('settings');
    }
    goeSign() {
        this.router.navigate(['Student/eSign']);
        console.log('Home');
    }
    goECForm() {
        this.router.navigate(['Student/EC-Form']);
        console.log('EC-Form');
    }
    goAttendence() {
        this.router.navigate(['Student/Attendence']);
        console.log('Attendence');
    }
    goNotices() {
        this.router.navigate(['Student/Notices']);
        console.log('Notices');
    }
}
