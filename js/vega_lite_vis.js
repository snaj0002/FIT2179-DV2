
const chartSpecs = [
  {id: 'chart-weather-map', spec: 'js/charts/01_weather_map.vg.json'},
  {id: 'chart-pop', spec: 'js/charts/02_population_ranking.vg.json'},
  {id: 'chart-density', spec: 'js/charts/03_density_lollipop.vg.json'},
  {id: 'chart-income', spec: 'js/charts/04_income_unemployment_scatter.vg.json'},
  {id: 'chart-education', spec: 'js/charts/05_education_income_scatter.vg.json'},
  {id: 'chart-migration', spec: 'js/charts/06_migration_diverging.vg.json'},
  {id: 'chart-unemployment', spec: 'js/charts/07_unemployment_trends.vg.json'},
  {id: 'chart-state-unemployment-map', spec: 'js/charts/07b_state_unemployment_map.vg.json'},
  {id: 'chart-heatmap', spec: 'js/charts/08_weather_heatmap.vg.json'},
  {id: 'chart-temperature', spec: 'js/charts/09_temperature_range.vg.json'},
  {id: 'chart-climate', spec: 'js/charts/10_climate_quadrant.vg.json'},
  {id: 'chart-wind', spec: 'js/charts/11_wind_profile.vg.json'},
  {id: 'chart-summary', spec: 'js/charts/12_state_summary.vg.json'}
];

const embedOptions = {actions: false, renderer: 'svg'};
chartSpecs.forEach(item => {
  vegaEmbed('#' + item.id, item.spec, embedOptions).catch(err => {
    console.error('Vega embed error for', item.id, err);
    document.getElementById(item.id).innerHTML = '<p class="chart-error">This chart could not be loaded. Check the data path and run with Live Server.</p>';
  });
});

// Lightweight scrollytelling behaviour: highlight active step and update progress label.
window.addEventListener('DOMContentLoaded', () => {
  const scroller = scrollama();
  scroller.setup({ step: '.story-step', offset: 0.58 })
    .onStepEnter(response => {
      document.querySelectorAll('.story-step').forEach(s => s.classList.remove('active'));
      response.element.classList.add('active');
    });
  window.addEventListener('resize', scroller.resize);
});
