export const files = {
    title: "File Explorer",
    data: [
        {
            id: "parent",
            name: "parent",
            type: "directory",
            collapsed: false,
            data: [
                {
                    id: "src",
                    name: "src",
                    type: "directory",
                    collapsed: true,
                    data: [
                        {
                            id: "components",
                            name: "components",
                            type: "directory",
                            collapsed: true,
                            data: [
                                {
                                    id: "header",
                                    name: "Header",
                                    type: "directory",
                                    collapsed: true,
                                    data: [
                                        {
                                            id: "header.js",
                                            name: "Header.js",
                                            type: "file",
                                            collapsed: true,
                                        },
                                        {
                                            id: "header.css",
                                            name: "Header.css",
                                            type: "file",
                                            collapsed: true,
                                        },
                                    ],
                                },
                                {
                                    id: "footer",
                                    name: "Footer",
                                    type: "directory",
                                    collapsed: true,
                                    data: [
                                        {
                                            id: "footer.js",
                                            name: "Footer.js",
                                            type: "file",
                                            collapsed: true,
                                        },
                                        {
                                            id: "footer.css",
                                            name: "Footer.css",
                                            type: "file",
                                            collapsed: true,
                                        },
                                    ],
                                },
                            ],
                        },
                        {
                            id: "app.js",
                            name: "App.js",
                            type: "file",
                            collapsed: true,
                        },
                        {
                            id: "index.js",
                            name: "index.js",
                            type: "file",
                            collapsed: true,
                        },
                    ],
                },
                {
                    id: "public",
                    name: "public",
                    type: "directory",
                    collapsed: true,
                    data: [
                        {
                            id: "index.html",
                            name: "index.html",
                            type: "file",
                            collapsed: true,
                        },
                        {
                            id: "favicon.ico",
                            name: "favicon.ico",
                            type: "file",
                            collapsed: true,
                        },
                    ],
                },
                {
                    id: "package.json",
                    name: "package.json",
                    type: "file",
                    collapsed: true,
                },
                {
                    id: "README.md",
                    name: "README.md",
                    type: "file",
                    collapsed: true,
                },
            ],
        },
    ],
};