"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3664],{6887:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>t,toc:()=>d});var s=r(4848),l=r(8453);const i={sidebar_label:"generative_functions",title:"analysis.generative_functions"},c=void 0,t={id:"reference/analysis/generative_functions",title:"analysis.generative_functions",description:"logger\\_config",source:"@site/docs/reference/analysis/generative_functions.md",sourceDirName:"reference/analysis",slug:"/reference/analysis/generative_functions",permalink:"/VAME/docs/reference/analysis/generative_functions",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{sidebar_label:"generative_functions",title:"analysis.generative_functions"},sidebar:"docsSidebar",previous:{title:"community_analysis",permalink:"/VAME/docs/reference/analysis/community_analysis"},next:{title:"gif_creator",permalink:"/VAME/docs/reference/analysis/gif_creator"}},o={},d=[{value:"logger_config",id:"logger_config",level:4},{value:"logger",id:"logger",level:4},{value:"random_generative_samples_motif",id:"random_generative_samples_motif",level:4},{value:"random_generative_samples",id:"random_generative_samples",level:4},{value:"random_reconstruction_samples",id:"random_reconstruction_samples",level:4},{value:"visualize_cluster_center",id:"visualize_cluster_center",level:4},{value:"generative_model",id:"generative_model",level:4}];function a(e){const n={code:"code",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h4,{id:"logger_config",children:"logger_config"}),"\n",(0,s.jsx)(n.h4,{id:"logger",children:"logger"}),"\n",(0,s.jsx)(n.h4,{id:"random_generative_samples_motif",children:"random_generative_samples_motif"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"def random_generative_samples_motif(cfg: dict, model: torch.nn.Module,\n                                    latent_vector: np.ndarray,\n                                    labels: np.ndarray,\n                                    n_clusters: int) -> plt.Figure\n"})}),"\n",(0,s.jsx)(n.p,{children:"Generate random samples for motifs."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Parameters"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"cfg"})," (",(0,s.jsx)(n.code,{children:"dict"}),"): Configuration dictionary."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"model"})," (",(0,s.jsx)(n.code,{children:"torch.nn.Module"}),"): PyTorch model."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"latent_vector"})," (",(0,s.jsx)(n.code,{children:"np.ndarray"}),"): Latent vectors."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"labels"})," (",(0,s.jsx)(n.code,{children:"np.ndarray"}),"): Labels."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"n_clusters"})," (",(0,s.jsx)(n.code,{children:"int"}),"): Number of clusters."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Returns"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"plt.Figure"}),": Figure of generated samples."]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"random_generative_samples",children:"random_generative_samples"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"def random_generative_samples(cfg: dict, model: torch.nn.Module,\n                              latent_vector: np.ndarray) -> plt.Figure\n"})}),"\n",(0,s.jsx)(n.p,{children:"Generate random generative samples."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Parameters"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"cfg"})," (",(0,s.jsx)(n.code,{children:"dict"}),"): Configuration dictionary."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"model"})," (",(0,s.jsx)(n.code,{children:"torch.nn.Module"}),"): PyTorch model."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"latent_vector"})," (",(0,s.jsx)(n.code,{children:"np.ndarray"}),"): Latent vectors."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Returns"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"plt.Figure"}),": Figure of generated samples."]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"random_reconstruction_samples",children:"random_reconstruction_samples"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"def random_reconstruction_samples(cfg: dict, model: torch.nn.Module,\n                                  latent_vector: np.ndarray) -> plt.Figure\n"})}),"\n",(0,s.jsx)(n.p,{children:"Generate random reconstruction samples."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Parameters"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"cfg"})," (",(0,s.jsx)(n.code,{children:"dict"}),"): Configuration dictionary."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"model"})," (",(0,s.jsx)(n.code,{children:"torch.nn.Module"}),"): PyTorch model to use."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"latent_vector"})," (",(0,s.jsx)(n.code,{children:"np.ndarray"}),"): Latent vectors."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Returns"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"plt.Figure"}),": Figure of reconstructed samples."]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"visualize_cluster_center",children:"visualize_cluster_center"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"def visualize_cluster_center(cfg: dict, model: torch.nn.Module,\n                             cluster_center: np.ndarray) -> plt.Figure\n"})}),"\n",(0,s.jsx)(n.p,{children:"Visualize cluster centers."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Parameters"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"cfg"})," (",(0,s.jsx)(n.code,{children:"dict"}),"): Configuration dictionary."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"model"})," (",(0,s.jsx)(n.code,{children:"torch.nn.Module"}),"): PyTorch model."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"cluster_center"})," (",(0,s.jsx)(n.code,{children:"np.ndarray"}),"): Cluster centers."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Returns"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"plt.Figure"}),": Figure of cluster centers."]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"generative_model",children:"generative_model"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'@save_state(model=GenerativeModelFunctionSchema)\ndef generative_model(config: dict,\n                     segmentation_algorithm: SegmentationAlgorithms,\n                     mode: str = "sampling",\n                     save_logs: bool = False) -> plt.Figure\n'})}),"\n",(0,s.jsx)(n.p,{children:"Generative model."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Parameters"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"config"})," (",(0,s.jsx)(n.code,{children:"dict"}),"): Configuration dictionary."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"mode"})," (",(0,s.jsx)(n.code,{children:"str, optional"}),'): Mode for generating samples. Defaults to "sampling".']}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Returns"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"plt.Figure"}),": Plots of generated samples for each segmentation algorithm."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>c,x:()=>t});var s=r(6540);const l={},i=s.createContext(l);function c(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:c(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);