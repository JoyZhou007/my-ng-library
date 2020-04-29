import { ExamplePanelComponent } from './example-panel.component';


export const routesConfig = [
  {
    path: '',
    redirectTo: 'button',
    pathMatch: 'full',
    data: {}
  },
  {
    path: 'button',
    component: ExamplePanelComponent,
    loadChildren: () => import('../../../../components/button/demo/button-demo.module').then(m => m.ButtonDemoModule),
    data: {
      name: 'Button',
      cnName: '按钮',
      description: '按钮用于开始一个即时操作，发起命令并获取结果，在特定场景中使用特定按钮形态',
      tmw: '标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。'
    }
  }
 
];
