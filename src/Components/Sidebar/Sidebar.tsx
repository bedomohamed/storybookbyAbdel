// export const Sidebar = () => {
//     return (<h1>Sidebar</h1>);
//   }
  
import "./Sidebar.css";
function SidebarLink({ text }) {
    return(
      <div className="link" >
          <h2>{text}</h2>
      </div>
    );
  }
  
  export const Sidebar = () =>{
  return(
    <div className="sidebar">
        <SidebarLink text="Home" />
        <SidebarLink text="Explore" />
        <SidebarLink text="Notifications" />
        <SidebarLink text="Messages" />
        <SidebarLink text="Bookmarks" />
        <SidebarLink text="Lists" />
        <SidebarLink text="Profile" />
        <SidebarLink text="More" />
    </div>
  );
}

