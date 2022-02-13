import React, { useState } from 'react';
import { Text, View } from 'react-native';
import Square from '../Square/Square'

export default function Row({ row, i }) {

    return (
        <View style={{ 
            flex: 1,
            flexDirection: 'row',
            alignItems: 'flex-start',
            height: '45%',
        }}>
            {row.map((block, j), () => {
                return <Square block={block} i={i} j={j} />
            })}
        </View>
    )
}
