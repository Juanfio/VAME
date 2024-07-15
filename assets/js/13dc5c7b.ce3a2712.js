"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5403],{801:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>t,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>a});var r=s(4848),l=s(8453);const i={sidebar_label:"segment_behavior",title:"vame.analysis.segment_behavior"},t=void 0,c={id:"reference/vame/analysis/segment_behavior",title:"vame.analysis.segment_behavior",description:"Variational Animal Motion Embedding 0.1 Toolbox",source:"@site/docs/reference/vame/analysis/segment_behavior.md",sourceDirName:"reference/vame/analysis",slug:"/reference/vame/analysis/segment_behavior",permalink:"/VAME/docs/reference/vame/analysis/segment_behavior",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{sidebar_label:"segment_behavior",title:"vame.analysis.segment_behavior"},sidebar:"docsSidebar",previous:{title:"pose_segmentation",permalink:"/VAME/docs/reference/vame/analysis/pose_segmentation"},next:{title:"tree_hierarchy",permalink:"/VAME/docs/reference/vame/analysis/tree_hierarchy"}},d={},a=[{value:"load_data",id:"load_data",level:4},{value:"kmeans_clustering",id:"kmeans_clustering",level:4},{value:"gmm_clustering",id:"gmm_clustering",level:4},{value:"behavior_segmentation",id:"behavior_segmentation",level:4},{value:"temporal_quant",id:"temporal_quant",level:4},{value:"cluster_latent_space",id:"cluster_latent_space",level:4}];function o(e){const n={a:"a",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"Variational Animal Motion Embedding 0.1 Toolbox\n\xa9 K. Luxem & P. Bauer, Department of Cellular Neuroscience\nLeibniz Institute for Neurobiology, Magdeburg, Germany"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://github.com/LINCellularNeuroscience/VAME",children:"https://github.com/LINCellularNeuroscience/VAME"}),"\nLicensed under GNU General Public License v3.0"]}),"\n",(0,r.jsx)(n.h4,{id:"load_data",children:"load_data"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"def load_data(PROJECT_PATH: str, file: str, data: str) -> np.ndarray\n"})}),"\n",(0,r.jsx)(n.p,{children:"Load data for the given file."}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"PROJECT_PATH"})," ",(0,r.jsx)(n.em,{children:"str"})," - Path to the project directory."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"file"})," ",(0,r.jsx)(n.em,{children:"str"})," - Name of the file."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"data"})," ",(0,r.jsx)(n.em,{children:"str"})," - Data to load."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"np.ndarray"})," - Loaded data."]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"kmeans_clustering",children:"kmeans_clustering"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"def kmeans_clustering(context: np.ndarray, n_clusters: int) -> np.ndarray\n"})}),"\n",(0,r.jsx)(n.p,{children:"Perform k-Means clustering."}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"context"})," ",(0,r.jsx)(n.em,{children:"np.ndarray"})," - Input data for clustering."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"n_clusters"})," ",(0,r.jsx)(n.em,{children:"int"})," - Number of clusters."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"np.ndarray"})," - Cluster labels."]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"gmm_clustering",children:"gmm_clustering"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"def gmm_clustering(context: np.ndarray, n_components: int) -> np.ndarray\n"})}),"\n",(0,r.jsx)(n.p,{children:"Perform Gaussian Mixture Model (GMM) clustering."}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"context"})," ",(0,r.jsx)(n.em,{children:"np.ndarray"})," - Input data for clustering."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"n_components"})," ",(0,r.jsx)(n.em,{children:"int"})," - Number of components."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"np.ndarray"})," - Cluster labels."]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"behavior_segmentation",children:"behavior_segmentation"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"def behavior_segmentation(config: str,\n                          model_name: str = None,\n                          cluster_method: str = 'kmeans',\n                          n_cluster: List[int] = [30]) -> None\n"})}),"\n",(0,r.jsx)(n.p,{children:"Perform behavior segmentation."}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"config"})," ",(0,r.jsx)(n.em,{children:"str"})," - Path to the configuration file."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"model_name"})," ",(0,r.jsx)(n.em,{children:"str, optional"})," - Name of the model. Defaults to None."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"cluster_method"})," ",(0,r.jsx)(n.em,{children:"str, optional"})," - Clustering method. Defaults to 'kmeans'."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"n_cluster"})," ",(0,r.jsx)(n.em,{children:"List[int], optional"})," - List of number of clusters. Defaults to [30]."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"None"})," - Save data to the results directory."]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"temporal_quant",children:"temporal_quant"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"def temporal_quant(cfg: dict, model_name: str, files: List[str],\n                   use_gpu: bool) -> Tuple\n"})}),"\n",(0,r.jsx)(n.p,{children:"Quantify the temporal latent space."}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"cfg"})," ",(0,r.jsx)(n.em,{children:"dict"})," - Configuration dictionary."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"model_name"})," ",(0,r.jsx)(n.em,{children:"str"})," - Name of the model."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"files"})," ",(0,r.jsx)(n.em,{children:"List[str]"})," - List of file names."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"use_gpu"})," ",(0,r.jsx)(n.em,{children:"bool"})," - Whether to use GPU."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Tuple"})," - Tuple of latent space array and logger."]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"cluster_latent_space",children:"cluster_latent_space"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"def cluster_latent_space(cfg: dict, files: List[str], z_data: np.ndarray,\n                         z_logger: List[int], cluster_method: str,\n                         n_cluster: List[int], model_name: str) -> None\n"})}),"\n",(0,r.jsx)(n.p,{children:"Cluster the latent space."}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"cfg"})," ",(0,r.jsx)(n.em,{children:"dict"})," - Configuration dictionary."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"files"})," ",(0,r.jsx)(n.em,{children:"List[str]"})," - List of file names."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"z_data"})," ",(0,r.jsx)(n.em,{children:"np.ndarray"})," - Latent space data."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"z_logger"})," ",(0,r.jsx)(n.em,{children:"List[int]"})," - Logger for the latent space."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"cluster_method"})," ",(0,r.jsx)(n.em,{children:"str"})," - Clustering method."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"n_cluster"})," ",(0,r.jsx)(n.em,{children:"List[int]"})," - List of number of clusters."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"model_name"})," ",(0,r.jsx)(n.em,{children:"str"})," - Name of the model."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,r.jsx)(n.p,{children:"None -> Save data to the results directory."})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>c});var r=s(6540);const l={},i=r.createContext(l);function t(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:t(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);