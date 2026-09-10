export type Inputs={size:number;power:number;hours:number;robots:number;frequency:number;lifetime:number;renewable:number};
export const defaults:Inputs={size:7,power:400,hours:1200,robots:100,frequency:20,lifetime:5,renewable:40};
export const architectures=['Cloud-only','Edge-only','Hybrid','Shared Foundation Model'];
export const colors=['#e65b40','#d39b43','#31866d','#748cba','#a4b37c','#ba8aab','#73a8a5','#929ca9'];
export function calculate(p:Inputs,architecture:string){
 const a=architectures.indexOf(architecture);const scale=p.size/7;const tasks=p.robots*p.frequency*60*4000;const grid=.45*(1-p.renewable/100)+.025*p.renewable/100;
 const training=p.power/1000*p.hours*scale*[1,1.15,.8,.25][a];
 const inference=tasks*.000012*scale*[1,.52,.62,.68][a];
 const hardware=p.robots/p.lifetime*[300,650,470,270][a];
 const stages=[{name:'Data preparation',energy:training*.12,co2:0,water:0},{name:'Model training',energy:training,co2:0,water:0},{name:'Hardware manufacturing',energy:hardware,co2:hardware*.65,water:hardware*3},{name:'Storage & transfer',energy:p.robots*scale*[18,4,9,12][a],co2:0,water:0},{name:'Sensing',energy:p.robots*4000*.008,co2:0,water:0},{name:'AI inference',energy:inference,co2:0,water:0},{name:'Cooling',energy:(training+inference)*[.35,.08,.18,.28][a],co2:0,water:0},{name:'End-of-life',energy:hardware*.025,co2:hardware*.025*.3,water:hardware*.025*.4}];
 stages.forEach((s,i)=>{if(i!==2&&i!==7){s.co2=s.energy*grid;s.water=s.energy*(.6+([1.3,.1,.6,1][a])*(i===6?2:1));}});
 const energy=stages.reduce((n,s)=>n+s.energy,0),co2=stages.reduce((n,s)=>n+s.co2,0),water=stages.reduce((n,s)=>n+s.water,0);return {name:architecture,energy,co2,water,task:co2*1000/tasks,tasks,stages,grid};
}
