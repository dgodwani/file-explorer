export interface MenuItem {
    id: string,
    name: string,
    type: MenuItemType,
    collapsed: boolean,
    data?: Array<MenuItem>
}

export enum MenuItemType {
    DIRECTORY = "directory",
    FILE = "file"
}

export interface ContextMenu {
    title: string,
    data: Array<MenuItem>
}