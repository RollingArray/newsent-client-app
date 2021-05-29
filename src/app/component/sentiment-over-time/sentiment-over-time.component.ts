import { Component, Injector, Input, OnInit } from '@angular/core';
import { BaseViewComponent } from '../base/base-view.component';
import * as Chart from 'chart.js';
import { SentimentModel } from 'src/app/shared/model/sentiment.model';
import { Platform } from '@ionic/angular';

@Component({
	selector: 'app-sentiment-over-time',
	templateUrl: './sentiment-over-time.component.html',
	styleUrls: ['./sentiment-over-time.component.scss'],
})
export class SentimentOverTimeComponent extends BaseViewComponent implements OnInit {

	/**
	 * Determines whether data has
	 */
	hasData : boolean;
	/**
	 * Input  of sentiment over time component
	 */
	@Input() sentimentModel!: SentimentModel;

	/**
	 * Canvas  of sentiment over time component
	 */
	canvas: any;

	/**
	 * Ctx  of sentiment over time component
	 */
	ctx: any;

	/**
	 * Creates an instance of sentiment over time component.
	 * @param injector 
	 */
	constructor(
		injector: Injector,
		public platform: Platform
	) {
		super(injector);
	}

	/**
	 * on init
	 */
	async ngOnInit() { 
		//
	}

	/**
	 * on changes
	 */
	async ngOnChanges(){
		//console.log(JSON.stringify(this.sentimentModel));
		if(this.sentimentModel){
			this.hasData = true;
			await this.chart();
		}
	 }

	/**
	 * Charts sentiment over time component
	 */
	async chart(){
		this.canvas = document.getElementById('sentiment');
		this.ctx = this.canvas.getContext('2d');
		let delta = this.platform.is('desktop') || this.platform.is('ipad') ? 400 : 50;
		this.canvas.width = document.documentElement.clientWidth - delta;
        // this.canvas.height = window.innerHeight;
		const myChart = new Chart(this.ctx, {
			type: 'line',
			data: {
				labels: this.sentimentModel.timeSeries,
				datasets: [{
					fill: false,
					borderColor: "#f1304d",
					borderWidth: 5,
					data: this.sentimentModel.scoreSeries,
				}]
			},
			options: {
				tooltips: {
					enabled: false
			   	},
				animationEasing: 'linear',
				scales: {
					xAxes: [{
						gridLines: {
							display: false
						},
						ticks: {
							fontColor: "#ccc", // this here
						  },
					}],
					yAxes: [{
						gridLines: {
							display: false
						},
						ticks: {
							max: 1.5,
							min: -1.5,
							stepSize: 0.5,
							fontFamily: 'icomoon',
							fontColor: '#ccc',
							fontSize: 30,
							callback: function (label, index, labels) {
								switch (label) {
									case -1:
										return '\ue9ee';
									case -0.5:
										return '\ue9e6';
									case 0.0:
										return '\ue9f6';
									case 0.5:
										return '\ue9e2';
									case 1:
										return '\ue9e0';
								}
							}
						}
					}],
				},
				legend: {
					display: false
				},
				responsive: false,
				display: true
			}
		});
	}
}
