import { Card, CardContent, Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'

export default function Question({  answer }) {

    return (
            <Card  >
                <CardContent>
                <Typography variant="h5" component="h2">
                    {answer}
            </Typography>
                </CardContent>
            </Card>
    )
}
