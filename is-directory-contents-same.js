function isDirectoryContentsSame(dir1, dir2) {
    if (dir1.meta.size !== dir2.meta.size || dir1.files.length !== dir2.files.length || dir1.folders.length !== dir2.folders.length) return false;
    let i;

    //compare file meta data
    for (i = 0; i < dir1.files.length; ++i) {
        let dir1File = dir1.files[i];
        let dir2File = dir2.files[i];

        if (dir1File.name !== dir2File.name || dir1File.size !== dir2File.size) return false;
    }

    //compare folder meta data
    for (i = 0; i < dir1.folders.length; ++i) {
        let dir1Folder = dir1.folders[i];
        let dir2Folder = dir2.folders[i];

        if (dir1Folder.name !== dir2Folder.name || dir1Folder.size !== dir2Folder.size) return false;
    }

    //compare file contents
    for (i = 0; i < dir1.files.length; ++i) {
        let dir1File = dir1.files[i];
        let dir2File = dir2.files[i];

        if (dir1File.contents !== dir2File.contents) return false;
    }

    //compare folder contents - recursive
    for (i = 0; i < dir1.folders.length; ++i) {
        let dir1Folder = dir1.folders[i];
        let dir2Folder = dir2.folders[i];

        if (!isDirectoryContentsSame(dir1Folder, dir2Folder)) return false;
    }

    return true;
}
