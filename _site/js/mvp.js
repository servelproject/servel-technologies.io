$( function () {
    $( "#defaultPlayer{{ post.modal-id }}" ).mediaPlayer( {
        autoplay : false,
        src : "{{ post.video }}",
        controlBar : {
            sticky : true
        },
        plugins : {
            dataServices : ['{{ post.data }}'],
            list : [
                {
                    'className' : 'fr.ina.amalia.player.plugins.TimelinePlugin',
                    'container' : '#timeline',
                    'parameters' : {
                        listOfLines : [
                            {
                                title : 'Face 1',
                                type : 'segment',
                                metadataId : 'ball-amalia01',
                                color : '#F00'
                            },
                            {
                                title : 'Face 2',
                                type : 'segment',
                                metadataId : 'faces-amalia',
                                color : '#A31'
                            }
                        ]
                    }
                }
            ]
        }
    } );
} );