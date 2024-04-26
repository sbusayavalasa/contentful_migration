module.exports = function (migration) {
    // Create a new category field in the blog post content type.
    const contentType = migration.editContentType('product');
    contentType.createField('version1')
      .name('Version1')
      .type('Symbol');
}
